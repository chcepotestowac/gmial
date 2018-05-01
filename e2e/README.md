# End 2 End tests

## How to Start?

```
npm i #this will install chromedriver as well
```

### Wrong ChromeDriver version

In case you need to use older version of Chrome Driver you can easily do so by:

```
npm run webdriver-clean
npm run postinstall
```

## Usage

You can run tests from console in few ways:

Only one test:

`npm run e2e-single TEST_FILE_NAME #e.g. security/deactivateUsers`

One test suite:

`npm run e2e-suite TEST_SUITE #e.g. security`

Everything:

`npm run e2e-all`
