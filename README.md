# safeguard
1. The user should log in via a login form using an email and password
    o This should be a basic form with email and password fields. You can
    use the React Native core library or a forms package of your choice
    o The form should send a POST request to the following URL:
    https://safeguard-me-coding-exercise.azurewebsites.net/api/Login with
    a JSON body of the form: {email: 'some@email.com',
    password:'any_password'}
    o As this is a coding exercise you can send any username and password
    you like.
    o You will receive a response of the form: {accessToken:
    'A_VERY_LONG_JWT_ACCESS_TOKEN_WILL_BE_RETURNED_HERE'}

2. The app should then request make a GET request to the endpoint
    https://safeguard-me-coding-exercise.azurewebsites.net/api/PortalUrl
    o This is a protected endpoint so you'll need to add an Authorization
    header to your request of the form: Authorization: Bearer
    THE_JWT_ACCCESS_TOKEN_YOU_RECEIVED_IN_STEP_1
    o This endpoint returns a plain text string which is a URL for a web portal
    where the user can upload a document

3. The app should then display the Portal URL you obtained from step 2 in a
    webview.
    o The webview requires that the user uploads a document so you'll need
    to consider if you need to obtain user permissions

4. When the user successfully uploads a document they'll be redirected to the

    URL https://safeguard-me-coding-
    exercise.azurewebsites.net/api/PortalSuccess

    o You'll need to detect this change in URL in your webview and replace
    the webview with a success message.

-- Instructions to start the app.
-- npm install
-- npx expo start

Note: I have not ran the app in IOS set up and I have only tested it in android. For Ios you might need extra permissions in app.json.