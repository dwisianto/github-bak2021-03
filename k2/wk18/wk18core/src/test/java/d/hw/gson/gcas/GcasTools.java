package d.hw.gson.gcas;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class GcasTools {

	public static GsonBuilder gsonBuilder = new GsonBuilder();
	public static Gson gson = null;
	static {
		gsonBuilder.setPrettyPrinting().serializeNulls();
		
		gson = gsonBuilder.create();
	}

	public static String encode(Gcas gcas) {
		return gson.toJson(gcas);
	}

	public static Gcas decode(String strCas) {
		return gson.fromJson(strCas, Gcas.class);		
	}
	

}
