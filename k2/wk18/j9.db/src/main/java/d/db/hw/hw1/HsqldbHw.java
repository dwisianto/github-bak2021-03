/**
 * 
 */
package d.db.hw.hw1;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.hsqldb.util.DatabaseManagerSwing;

public class HsqldbHw {
	
	static Properties appProp = new Properties();
	static {
		appProp.put("db.name","b5");
		appProp.put("db.location", "target/hsqldb/hdb5");
		appProp.put("db.jdbc.driver","org.hsqldb.jdbc.JDBCDriver");		 
		appProp.put("db.jdbc.connection","jdbc:hsqldb:file:"+appProp.getProperty("db.location") + File.separator + appProp.getProperty("db.name") );		
		appProp.put("db.scpt.init","src/main/sql/contacts_table_gen.sql");
		appProp.put("db.scpt.fill","src/main/sql/contacts_population.sql");
	}
	
	
	
	
	
	
	enum enumAction { QRY, BLD, GUI, CLN };	
	public static void main(String [] args) throws Exception {
		
		// this loads the DB driver as explained here:  
		// http://stackoverflow.com/questions/5992126/loading-jdbc-driver				
		try { System.out.println("Attempting to create contacts DB ... ");
			Class.forName( appProp.getProperty("db.jdbc.driver") );
		} catch (ClassNotFoundException e) { throw e; }
		System.out.println("Driver done loading");
		
		
		// [] 		
		//enumAction anAct = enumAction.BLD;
		//enumAction anAct = enumAction.CLN;
		enumAction anAct = enumAction.QRY;
		switch(anAct) {
			case CLN: dbCln();   break;
			case BLD: dbBld(); 	break;
			case QRY: dbQry();	break;						
			case GUI: DatabaseManagerSwing.main(new String[] {"--url", appProp.getProperty("db.jdbc.connection"), "--noexit"}); break;   			
		}
		System.out.println("end");
		 
	}
	
	public static void dbCln() {
		
		try {
			// [] delete existing database
			//String sFileDb = appProp.getProperty("db.location")+File.separator+appProp.getProperty("db.name");
			String sFileDb = appProp.getProperty("db.location");
			System.out.println(" Deleting ... "+sFileDb);
			FileUtils.deleteDirectory(new File(sFileDb));	
		} catch(Exception e) {e.printStackTrace(); }
		
	}
	
	public static void dbBld()  {
		
		
		
		//
		Connection con = null;
		try {
			
			// [] create the connection.  "SA" is default user with hypersql
			con = DriverManager.getConnection( appProp.getProperty("db.jdbc.connection") , "SA", "");

			// [] create the table
			String sQry1 = FileUtils.readFileToString(new File(appProp.getProperty("db.scpt.init")), "utf-8"); 
			sQry1       += "create table if not exists " +
					" contacts (name varchar(45),email varchar(45),phone varchar(45));";			
			con.createStatement().executeQuery(sQry1);
			
			String sQry2 = FileUtils.readFileToString(new File(appProp.getProperty("db.scpt.fill")), "utf-8");
			sQry2 += "insert into contacts" +
					" values ('joe','test@tst.com','12345');";
			con.createStatement().executeQuery(sQry2);
			
			
			// select everything
			String sQry11="select * from contacts";
			PreparedStatement pst = con.prepareStatement(sQry11);
			pst.clearParameters();
			ResultSet rs = pst.executeQuery();

			List<Contact> contacts = new ArrayList<>();
			while(rs.next()){
				contacts.add(new Contact(
						rs.getString(1), 
						rs.getString(2), 
						rs.getString(3)
						)
						);
			}
			
			for(Contact c : contacts) { System.out.println(c); }
			

		} catch(Exception e) {e.printStackTrace();
		} finally {  		
			try { if(con != null) { con.close(); }			  			
			} catch( Exception e) { e.printStackTrace(); }
		} 
		
	}

	public static void dbQry() {
		
		Connection con  = null;
		try {
			con = DriverManager.getConnection( appProp.getProperty("db.jdbc.connection") , "SA", "");

			// select everything
			String sQry11="select * from contacts";
			PreparedStatement pst = con.prepareStatement(sQry11);
			pst.clearParameters();
			ResultSet rs = pst.executeQuery();

			List<Contact> contacts = new ArrayList<>();
			while(rs.next()){
				contacts.add(new Contact(
						rs.getString(1), 
						rs.getString(2), 
						rs.getString(3)
						)
						);
			}
			
			for(Contact c : contacts) { System.out.println(c); }
			

		} catch(Exception e) { e.printStackTrace();
		} finally {
			try { if(con != null) { con.close(); }			  			
			} catch( Exception e) { e.printStackTrace(); }
			
		}		
		
	}
	
	

}

class Contact {

	public String name;
	public String email;
	public String phone;

	public Contact(String name, String email, String phone) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "Contact [name=" + name + ", email=" + email + ", phone=" + phone + "]";
	}

}
