## How to create models and its integration tests on magento 2

If you have doubts about how to install this module, go to this [README](https://github.com/talosdigital/u-magento2/blob/master/README.md)

### INTEGRATION TESTS ON MAGENTO 2:
- Create integration tests database. e.g.: CREATE DATABASE magentou_integration_tests;

- Go to dev/tests/integration/etc/ and copy the file "install-config-mysql.php.dist" as "install-config-mysql.php.". Change the values of the db conection according to you db configuration.

- Go to dev/tests/integration and copy the file "phpunit.xml.dist" as "phpunit.xml". Change your testsuite block with the following  
    ``` 
    <!-- Test suites definition -->
    <testsuites>
        <!-- Memory tests run first to prevent influence of other tests on accuracy of memory measurements -->
        <testsuite name="Magento Integration Tests">
            <directory>../../../app/code/*/*/Test/Integration</directory>
        </testsuite>
    </testsuites>
    ``` 
    In order to optimize the running time of the tests, change the value of the constant ```TESTS_CLEANUP``` to ```disabled```

- Run the following commands:
    ```
    MAGENTO_HOME=$(pwd)
    rm -rf dev/tests/integration/tmp/sandbox*
    ./vendor/phpunit/phpunit/phpunit --configuration $MAGENTO_HOME/dev/tests/integration/phpunit.xml
    ```

