#include <Firebase_ESP_Client.h>
#include <WiFiManager.h>
#include "credentials.h"

//Define the Firebase Data object
FirebaseData fbdo;

//Define the FirebaseAuth data for authentication data
FirebaseAuth auth;

// Define the FirebaseConfig data for config data
FirebaseConfig config;

void tokenStatusCallback(TokenInfo info);

const int sense_Pin = 36;
int value = 0;

void setup()
{
  WiFiManager wifiManager;

  esp_sleep_enable_timer_wakeup(3600000000);

  Serial.begin(115200);
  Serial.println("Conecting.....");
  wifiManager.autoConnect("Plant Sensor");
  Serial.println("Connected");

  //Assign the project host and api key
  config.host = FIREBASE_HOST;
  config.api_key = API_KEY;

  //Assign the user sign in credentials
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  /** Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback;

  /** Assign the maximum retry of token generation */
  config.max_token_generation_retry = 5;

  //Initialize the library with the Firebase authen and config.
  Firebase.begin(&config, &auth);

  Serial.print("Waiting for token");

  while (Firebase.authTokenInfo().status != token_status_ready)
  {
    Serial.print(".");
    delay(300);
  }

  value = analogRead(sense_Pin);

  if (Firebase.RTDB.setInt(&fbdo, "plants/plant_1/sensor", value))
  {
    Serial.println("PASSED");
    Serial.println(value);
  }
  else
  {
    Serial.println("FAILED");
    Serial.println("REASON: " + fbdo.errorReason());
  }

  esp_deep_sleep_start();
}

void loop()
{
}

void tokenStatusCallback(TokenInfo info)
{
  if (info.status == token_status_error)
  {
    Serial.printf("Token info: type = %s, status = %s\n", getTokenType(info).c_str(), getTokenStatus(info).c_str());
    Serial.printf("Token error: %s\n", getTokenError(info).c_str());
  }
  else
  {
    Serial.printf("Token info: type = %s, status = %s\n", getTokenType(info).c_str(), getTokenStatus(info).c_str());
  }
}

/* The helper function to get the token type string */
String getTokenType(struct token_info_t info)
{
  switch (info.type)
  {
  case token_type_undefined:
    return "undefined";

  case token_type_legacy_token:
    return "legacy token";

  case token_type_id_token:
    return "id token";

  case token_type_custom_token:
    return "custom token";

  case token_type_oauth2_access_token:
    return "OAuth2.0 access token";

  default:
    break;
  }
  return "undefined";
}

/* The helper function to get the token status string */
String getTokenStatus(struct token_info_t info)
{
  switch (info.status)
  {
  case token_status_uninitialized:
    return "uninitialized";

  case token_status_on_initialize:
    return "on initializing";

  case token_status_on_signing:
    return "on signing";

  case token_status_on_request:
    return "on request";

  case token_status_on_refresh:
    return "on refreshing";

  case token_status_ready:
    return "ready";

  case token_status_error:
    return "error";

  default:
    break;
  }
  return "uninitialized";
}

/* The helper function to get the token error string */
String getTokenError(struct token_info_t info)
{
  String s = "code: ";
  s += String(info.error.code);
  s += ", message: ";
  s += info.error.message.c_str();
  return s;
}
