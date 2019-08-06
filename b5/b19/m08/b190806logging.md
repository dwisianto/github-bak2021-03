
## Java Util Logging

java.util.logging

```java
package d.rl;

import java.io.File;
import java.io.FileInputStream;
import java.util.logging.LogManager;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
			
	final static Logger logger = Logger.getLogger( AppTest.class.getName());
	static {
		
		try { // java.util.logging
			String sFileName="logging.properties";
			ClassLoader classLoader = AppTest.class.getClassLoader();
			File file = new File( classLoader.getResource(sFileName).getFile() );
			LogManager.getLogManager().readConfiguration(new FileInputStream(file));
		} catch(Exception ex) { ex.printStackTrace(); }
	}
	
    @Test
    public void LogConfig() { 
    	logger.info("starts");
    	logger.info("ends");
    }
}
```
