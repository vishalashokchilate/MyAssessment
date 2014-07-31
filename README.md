# Citrix Online Web Developer Assessment

## What to do
In this project you will find a bunch of JavaScript unit tests in the ```test/``` folder as well as several, mostly empty AMD modules in the ```src/``` folder.
Your task is it to implement the AMD modules so that all the unit tests will pass.
The tests will give you detailed errors that should be enough to figure out what you need to do, but you are of course free to look at the source code of the tests.
Your changes however should all happen in files under the ```src/``` directory.

Before you start, please make sure you have all the prerequisites installed properly by running the project from https://github.com/tkissing/citrix-js-assessment-intro/

### A note on using frameworks
Unless the answer file already includes one as a dependency, you should not use any frameworks.


## How To Run
Open a command line and change the working directory to the directory containing this file. Then run ```npm install --production```.

You now have 2 choices:

### Manually run tests between edits
Run ```grunt karma:once``` whenever you want to run the tests. This will run the tests once and then exit.
At first it should fail with
    Aborted due to warnings.
Once you implemented all the code correctly, the output should end in
    Done, without errors.```

### Monitor filesystem for changes and automatically run tests
Run ```grunt karma:watch```. This will run the tests once and then sleep.
The Karma testrunner will monitor the file system and anytime you save a file in ```src/``` it will re-run the tests.
A failure will look something like this (on the last line of the output):

    JS 1.9 (Mac): Executed 13 of 13 (12 FAILED) (0.284 secs / 0.007 secs)

At first it should fail with ```Aborted due to warnings.```. Once you implemented all the code correctly,
the output should end in something like this:

    JS 1.9 (Mac): Executed 13 of 13 SUCCESS (0.289 secs / 0.006 secs)

## When you are done
Once you are done or you have exceeded the time given to you, please zip up all files and upload them to https://citrix.sharefile.com/r/r180c354b3a946fcb
