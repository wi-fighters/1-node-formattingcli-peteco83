## Instructions for students:

### Formatting CLI 

Create a Formatting CLI in `formatting.js`. The CLI should:
    a) Trim whitespace from the beginning and end of the parameter.
    b) Collapse spaces (ensure only one space appears at a time, no doubles)

    Example output:  
    - '  sao   tome'     => 'sao tome'
    - 'kuala lumpur  '  => 'kuala lumpur'

-   Make sure the CLI has an `index.js` file.
-   In `messaging.js` write a new function called `showHelp`.
    *   The function should fire if the term `--help` appears anywhere in the argument list.
    example of the output:

    ```bash
    $ node index --help
    Welcome to my app
    --help
    ```

-   also in `formatting.js` write a new function called `capitalizeInitial`.        This function should take a string as a parameter, and return it with only      the first letter capitalized.

    Example output:  

    - 'europe'        => 'Europe'
    - 'BERLIN'        => 'Berlin'
    - 'aSIa'          => 'Asia'

**Bonuses**

-   Your program should be able to remove symbols.

### Rules

-   This is an individual assignment.
-   Deadline: 30 minutes.
-   Use **Git properly**






