import time
from selenium import webdriver;
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.options import Options
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from twilio.rest import Client

#
# Need to use "arch -x86_64 /bin/bash" if using m1 macbook.

#
# Set up the credentials for firebase
cred = credentials.Certificate("/Users/olsenbudanur/Desktop/Class Material/Club/Hackathons/BisonHacks2022/backend/firebaseKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()



#
# Set up the credentials for Twilio
account_sid = 'CANT SHARE THIS HERE'
auth_token = 'CANT SHARE THIS HERE'
twilio_number = 'CANT SHARE THIS HERE'
client = Client(account_sid, auth_token)


#
# Send a message to "send_to"
# send_to = '+12408104360'
# message = client.messages.create(
#     body = "This is a new message",
#     from_ = twilio_number,
#     to = send_to
# )


#
# Get the user data collection.
doc_ref = db.collection(u'UserData')
doc2 = doc_ref.get()

#
# Loop through the user data, and add it to our list.
userData = []
for doc in doc2:
    userData.append(doc)
    print(f'Document data: {doc.to_dict()}')



#
# This is the path of the chrome driver on my main machine.
PATH = "/Users/olsenbudanur/Desktop/Class Material/Club/Hackathons/BisonHacks2022/backend/chromedriver"

#
# These are the required options if you'd like to run the chrome headless.
# Not as cool, but more efficent...
# user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"

# options = webdriver.ChromeOptions()
# options.headless = True
# options.add_argument(f'user-agent={user_agent}')
# options.add_argument("--window-size=1920,1080")
# options.add_argument('--ignore-certificate-errors')
# options.add_argument('--allow-running-insecure-content')
# options.add_argument("--disable-extensions")
# options.add_argument("--proxy-server='direct://'")
# options.add_argument("--proxy-bypass-list=*")
# options.add_argument("--start-maximized")
# options.add_argument('--disable-gpu')
# options.add_argument('--disable-dev-shm-usage')
# options.add_argument('--no-sandbox')

# driver = webdriver.Chrome(PATH, options=options);


#
# Uncomment this if you'd like to run it on COOL MODE!
driver = webdriver.Chrome(PATH)


#
# This chunk deals with setting up the scraping process.
vars = {}
driver.get("https://www.dmv.virginia.gov/onlineservices/appointments.aspx")
driver.set_window_size(1440, 875)
vars["window_handles"] = driver.window_handles


#
# Click the "Schedule" button
driver.find_element(By.CSS_SELECTOR, ".btn").click()


#
# Deal with switching windows on the chrome driver.
time.sleep(round(2000 / 1000))
wh_now = driver.window_handles
wh_then = vars["window_handles"]
if len(wh_now) > len(wh_then):
    vars["win7946"] = set(wh_now).difference(set(wh_then)).pop()
driver.switch_to.window(vars["win7946"])


#
# Click on "Other services" button
time.sleep(round(2000 / 1000))
driver.find_element(By.CSS_SELECTOR, ".QflowObjectItem:nth-child(7)").click()

#
# Click on new drivers license button.
time.sleep(round(2000 / 1000))
driver.find_element(By.CSS_SELECTOR, ".QflowObjectItem:nth-child(4)").click()


#
# Click on the Arlington office.
time.sleep(round(2000 / 1000))
driver.find_element(By.CSS_SELECTOR, ".QflowObjectItem:nth-child(3)").click()


#
# Get the next available appointment.
time.sleep(round(2000 / 1000))
el = driver.find_element(By.CSS_SELECTOR, ".DateTimeGrid-Day:nth-child(1)")

print("The soonest time is: ", el.text)


#
# Close the current window.
driver.quit()
