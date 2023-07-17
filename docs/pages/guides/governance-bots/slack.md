# Slack Governance Alerts Bot

## **Prerequisites**

Before we begin, make sure you have the following:

1. A Leap [webhooks](https://webhooks.leapwallet.io) account.
2. A [Slack](https://slack.com/intl/en-in) account
3. A [Replit](https://replit.com/~) account
4. Familiarity with Python

## Overview

Here's a brief outline of the steps we'll cover in this guide:

1. Creating a new webhook!
2. Configuring Leap’s Notifications Webhook
3. Writing the Python code for the bot
4. Setting up the Slack bot

Let's dive in!

# Step 1: Setting up the Python App on Replit

1. Log into Replit and click the "Create Repl" button in your menu.
2. Search and select the Flask template. Name the project whatever you like.

![](https://i.imgur.com/G6ocVDj.png)

1. Write the following code in your `main.py` file. This script is tailored to Governance notifications.

```python
import os
from flask import Flask, request, Response
import requests
import traceback
import sys
import json

app = Flask(__name__)

# Set up Slack Webhook url in order to send message to your slack channel
SLACK_WEBHOOK_URL = os.environ["SLACK_WEBHOOK_URL"]

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

def send_slack_message(message):
  # Send a message to Telegram using Telegram API

  url = SLACK_WEBHOOK_URL

  payload = json.dumps({"text": message})
  headers = {"Content-Type": "application/json"}

  response = requests.request("POST", url, headers=headers, data=payload)

  print(response.text)

  return

def handler(event):
  # Handle the event and send a message to Telegram
  print(event)
  message = get_parsed_message(event)
  if message is None:
    print("Event is not parsed")
    return
  send_slack_message(message)

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
  app.run(host="0.0.0.0", port=81)
```

# Step 2: Create a New Bot on Slack and Link It to the Server

1. Head over to [slack](https://api.slack.com/bot-users) and create a Bot User. 
2. Click on Create New App. Enter an **App Name** for your new Bot. Also select the workspace in which you want to use this bot.

![Untitled](https://i.imgur.com/dbKdQrP.png)

3. Click on your newly created app to navigate to App level settings.
4. Open **Incoming Webhooks** from the sidepanel. We will be using Webhooks to send the slack message, click on **Activate Incoming Webhooks** to allow bot to send messages via webhooks. Click on **Add New Webhooks to Workspace** to start creating a webhook for your workspace.

![Untitled](https://i.imgur.com/4xjTdpl.png)

5. Inside the drop-down menu that opens, select the channel name for which you want to send the slack message to.

![Untitled](https://i.imgur.com/D0dz2JM.png)

6. You should now be able to see a Webhook URL for the channel you selected previously. Lets copy the webhook URL and update the same in our python code on replit.

![Untitled](https://i.imgur.com/y0NGpwC.png)

1. Open the Secrets tool in Replit. Store the API token in an environment variable **SLACK_WEBHOOK_URL**. This ensures the token remains secure and accessible to your Python script.

![Untitled](https://i.imgur.com/sP1R1Ut.png)

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

![](https://i.imgur.com/ccXOdTT.png)

3. Click on “Create” once you have entered all details.

![](https://i.imgur.com/rfJXXTs.png)

4. Verification code is sent to your python server hosted on replit, just copy the verification code that is printed on the terminal in replit, and paste it in the dialog box asking for Verification key in leap notifications portal.

![](https://i.imgur.com/SApQTwq.png)

5. Your bot is ready to receive and start sending notifications to Slack now.

![](https://i.imgur.com/ulZJdmG.png)

# Production

Your development server will stop running when you close the Replit window. To keep it live all the time, you can use Replit Deployments.

If you use a Deployment, make sure to use the Deployment URL in your Alchemy webhook instead of the development URL.

![https://files.readme.io/4618897-Screenshot_2023-05-19_at_3.19.11_PM.png](https://files.readme.io/4618897-Screenshot_2023-05-19_at_3.19.11_PM.png)

![https://files.readme.io/b718f4b-Screenshot_2023-05-19_at_3.30.22_PM.png](https://files.readme.io/b718f4b-Screenshot_2023-05-19_at_3.30.22_PM.png)