# Telegram Governance Alerts Bot

## **Prerequisites**

Before we begin, make sure you have the following:

1. A Leap [webhooks](https://webhooks.leapwallet.io) account.
2. A [Telegram](https://telegram.org/) account
3. A [Replit](https://replit.com/~) account
4. Familiarity with Python

## Overview

Here's a brief outline of the steps we'll cover in this guide:

1. Creating a new webhook!
2. Configuring Leap’s Notifications Webhook
3. Writing the Python code for the bot
4. Setting up the Telegram bot

Let's dive in!

# Step 1: Build the Telegram Bot with Python

We've reached the exciting part - building our Telegram app using Python and Flask, a popular framework for building web applications and APIs. Flask provides all the functionality needed to receive HTTP requests from Alchemy and respond accordingly. We'll write and host this new app on Replit.

### Setting up the Python App on Replit

1. Log into Replit and click the "Create Repl" button in your menu.
2. Search and select the Flask template. Name the project whatever you like.

![Untitled](https://i.imgur.com/G6ocVDj.png)

1. Run `poetry add python-telegram-bot@13.0` in the shell. This installs a package that will help you communicate with the Telegram API.

![Untitled](https://i.imgur.com/zYGpG6Q.png)

1. Write the following code in your `main.py` file. This script is tailored to Governance notifications.

```python
import os
from flask import Flask, request, Response
from telegram import Update, Bot
from telegram.ext import Updater, CommandHandler, CallbackContext
import requests
import traceback
import sys
import json

app = Flask(__name__)

# Set up Telegram bot API
TELEGRAM_API_TOKEN = os.environ["BOT_TOKEN"]
bot = Bot(TELEGRAM_API_TOKEN)

# Initialize global variable for chat ID
user_chat_id = None

def get_parsed_message(event):
  event_type = event.get("__type", None)
  text = None
  if event_type == "cosmos.gov.deposit":
    text = "Deposit for chain:{},proposalID: {} {}{}, ".format(
      event["blockchain"],
      event["proposalId"],
      event["tokens"][0]["quantity"],
      event["tokens"][0]["denomination"],
    )
  elif event_type == "cosmos.gov.vote":
    text = "Vote:{} received for chain:{},proposalID: {}".format(
      event["option"], event["blockchain"], event["proposalId"])
  elif event_type == "cosmos.gov.submitProposal":
    text = "Governance Proposal Submitted chain:{},proposalID: {}, {}{}".format(
      event["option"],
      event["blockchain"],
      event["proposalId"],
      event["tokens"][0]["quantity"],
      event["tokens"][0]["denomination"],
    )

  return text

def send_telegram_message(message):
  # Send a message to Telegram using Telegram API

  url = "https://api.telegram.org/bot{}/sendMessage?chat_id={}".format(
    TELEGRAM_API_TOKEN, user_chat_id)

  payload = json.dumps({"text": message})
  headers = {"Content-Type": "application/json"}

  response = requests.request("POST", url, headers=headers, data=payload)

  print(response.text)

  return

def get_chat_id():
  # Get the chat ID from Telegram API

  url = "https://api.telegram.org/bot{}/getUpdates".format(TELEGRAM_API_TOKEN)

  payload = {}
  headers = {}

  try:
    response = requests.request("GET", url, headers=headers, data=payload)
    response.raise_for_status()
    json_response = response.json()  # Parse the JSON response
    global user_chat_id
    user_chat_id = json_response["result"][0]["message"]["chat"]["id"]
    print(url)
    print(json_response)
  except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error occurred: {http_err}")
  except (KeyError, IndexError):
    # Handle KeyError and IndexError together
    print(
      f"Please send any message to the bot, this is required to get the chat id"
    )
    sys.exit()
  except Exception as err:
    print(f"An error occurred: {err}")
    traceback.print_exc()

def handler(event):
  # Handle the event and send a message to Telegram
  print(event)
  message = get_parsed_message(event)
  if message is None:
    print("Event is not parsed")
    return
  send_telegram_message(message)

@app.route("/", methods=["GET"])
def main():
  # Return a success response to the request
  return Response(status=200)

@app.route("/", methods=["POST"])
def webhook():
  # Handle incoming webhook requests

  handler(request.json)

  # Return a success response to the request
  return Response(status=200)

# Start Flask app
if __name__ == "__main__":
  get_chat_id()
  print(user_chat_id)
  app.run(host="0.0.0.0", port=81)
```

# Step 2: Create a New Bot on Telegram and Link It to the Server

1. Open the Telegram app and search for the **BotFather** bot.
2. Start a chat with **BotFather** and send the command `/newbot`.
3. Follow the instructions provided by **BotFather** to create a new bot and obtain the unique API token.

![https://files.readme.io/eea9aa7-small-father_HIGHLIGHTED.png](https://files.readme.io/eea9aa7-small-father_HIGHLIGHTED.png)

4. Open the Secrets tool in Replit. Store the API token in an environment variable **BOT_TOKEN**. This ensures the token remains secure and accessible to your Python script.

![https://files.readme.io/3631e0d-small-secret_HIGHLIGHTED.png](https://files.readme.io/3631e0d-small-secret_HIGHLIGHTED.png)

5. Run the Python app on Replit, and start a chat with your newly created bot on Telegram. You should receive a confirmation message. Send any message to the newly created bot so that the python server can get the chat_id using your conversation.
6. To complete the app, we'll need Leap Webhook to begin sending notifications to our Flask server. Set up a new Leap webhook for the event you're interested in tracking and provide the URL of your server.

# Step 3: Create a new webhook

The server’s URL will follow the pattern `<project_name>.<user_name>.repl.co` . Once you've entered the URL, click "Create Webhook" to activate it, and your bot will start receiving data from Alchemy whenever the specified event takes place.

Your Telegram bot is now set up and ready to send notifications for DAI transfers or any other event you've tailored the handler to process.

Turn off your Alchemy webhook when you're not using it in order to preserve your credits.

1. Log in to your Leap [webhooks](https://developer.leapwallet.io/webhooks) account.
2. Click "New Webhook" and fill in the following details. 
**Name of the web** : *Give the webhook you have created a name*
**Select Chain from the dropdown** : *We have selected osmosis for this example. Refer to the [docs](https://leapwallet.github.io/notifications-webhook-demo) to get list of chains supporter*
**Transaction type(s) *:** *Multi-Select from the drop down all the transactions you want to listen to. For the purpose of setting up Governance alerts you can select “Gov Deposit”, “Submit Proposal” and “Vote”.  Refer to the [docs](https://leapwallet.github.io/notifications-webhook-demo) to get a list of transaction types supports*
    
    **Webhook URL*:** *Paste the webhook url which you copied from replit, it will be of the format **<project_name>.<user_name>.repl.co***
    

![Untitled](https://i.imgur.com/ccXOdTT.png)

3. Click on “Create” once you have entered all details.

![Untitled](https://i.imgur.com/rfJXXTs.png)

4. Verification code is sent to your python server hosted on replit, just copy the verification code that is printed on the terminal in replit, and paste it in the dialog box asking for Verification key in leap notifications portal.

![Untitled](https://i.imgur.com/SApQTwq.png)

5. Your bot is ready to receive and start sending notifications to Telegram now.

# Production

Your development server will stop running when you close the Replit window. To keep it live all the time, you can use Replit Deployments.

If you use a Deployment, make sure to use the Deployment URL in your Alchemy webhook instead of the development URL.

![https://files.readme.io/4618897-Screenshot_2023-05-19_at_3.19.11_PM.png](https://files.readme.io/4618897-Screenshot_2023-05-19_at_3.19.11_PM.png)

![https://files.readme.io/b718f4b-Screenshot_2023-05-19_at_3.30.22_PM.png](https://files.readme.io/b718f4b-Screenshot_2023-05-19_at_3.30.22_PM.png)