# Lab 8 - Starter
### 1) 1. Within a Github action that runs whenever code is pushed.
   
   The reason I would fit automated tests in this part of the development process is for two reasons. First, it is incremental and allows code to be tested multiple times throughout the development process. Second, you can set it up so code is only merged if it passes the tests. This makes it so the main branch is never corrupted with broken code.

### 2) No

    The E2E test is for testing UI and user experience, not a function that has already been abstracted from the user and the user does not directly call and use.

### 3) No

    The unit tests are meant to test small components in an application. This messaging function requires many smaller pieces of code to work together and deliver an ideal user experience. These smaller components should be individually unit tested, but the entire messaging feature should not be unit tested as one large component (without individual tests underneath as well).

### 4) Yes

    This makes sense as something to have a unit test for, since it is an isolated unit of code. The unit test should simply check (and only check) if the user is able to type more than 80 characters.


