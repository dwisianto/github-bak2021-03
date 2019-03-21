# Eclipse

- Java
- [Cdt](#cdt)
    - [buildDir](https://stackoverflow.com/questions/4882231/set-build-output-directory-in-eclipse-c)
- [PyDev](#pydev)
- Database
- Markdown

## Installation


# CDT

I personally prefer to maintain my project files in a workspace/build directory; 
- copying binaries to a workspace/bin directory and 
- copying libraries to a workspace/lib directory.
At first I found this copy workaround to be an inconvenience, but have come to appreciate it because it isolates the temporary build files from the final binary/library.

For binaries, I would use:

```bash
cp ${BuildArtifactFilePrefix}${BuildArtifactFileName} "${WorkspaceDirPath}/bin/";
```

For libraries, I would use:

```bash
cp ${BuildArtifactFilePrefix}${BuildArtifactFileName} "${WorkspaceDirPath}/lib/";
```

I include the variable "${BuildArtifactFilePrefix}" because CDT includes "lib" as a default prefix for static libraries, which I actually prefer.

- You just need to ensure that the target directory exists before building; Eclipse/CDT will not create the directory for you.
- Also, just remember that these copies will be left behind in the /bin or /lib directory on clean, but overwritten on any subsequent rebuild.


# PyDev

- http://www.pydev.org/manual_101_install.html
- 

```bash
from setuptools import setup, find_packages

setup(
   name='dproject',
   version='0.1',
   description='D project',
   author='dwisianto',
   author_email='dwisianto@gmail.com',
   packages= find_packages(),
   #install_requires=['bar', 'greek'], #external packages as dependencies
   #tests
   setup_requires=['pytest-runner'],
   tests_require=['pytest'],
   test_suite='py1.test'#py1.test
)
```


### Database



## WebApp

### Tomcat

### OpenLiberty

