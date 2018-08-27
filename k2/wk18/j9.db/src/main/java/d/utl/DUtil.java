package d.utl;

import java.io.File;
import java.io.FileReader;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.junit.Test;


public class DUtil {

	final static Logger logger = Logger.getLogger( DUtil.class);	

	public static Properties propLoad(String sFileLoc ) {

		Properties prop = null; 
		try ( FileReader frProp = new FileReader( new File(sFileLoc)) ) {     
			prop = new Properties();
			prop.load(frProp);
		} catch( Exception ex) {
			ex.printStackTrace();
		}

		return prop;
	}


	public static String propToStr(Properties prop) {

		StringWriter writer = new StringWriter();
		prop.list(new PrintWriter(writer));
		return writer.getBuffer().toString();		
	}

	@Test
	public void propLoad_t() {

		String sFileLoc = "src/main/resources/apps.properties";
		Properties prop = propLoad(sFileLoc);
		System.out.println( propToStr(prop));

	}


}
