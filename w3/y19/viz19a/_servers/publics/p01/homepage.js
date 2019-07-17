$(document).ready( function() {
    console.log("doc is ready");
    
	// []
	//inJson                    = '{"natural":[{"data":{"motifs":[{"id":"0","type":"cd","start":3,"end":5,"textPattern":"cd"},{"id":"1","type":"gh","start":9,"end":11,"textPattern":"gh"},{"id":"2","type":"kl","start":15,"end":17,"textPattern":"kl"},{"id":"3","type":"mn","start":18,"end":20,"textPattern":"mn"},{"id":"4","type":"op","start":21,"end":23,"textPattern":"op"}]},"text":"ab cd ef gh ij kl mn op qr st uvw xyz"}]}'; 	
	//inJson                    = '{"natural":[{"text":"abc def ghi jk mnop ","data":{"motifs":[{"id":"0","type":"type1","start":0,"end":3,"textPattern":"abc"},{"id":"1","type":"type2","start":4,"end":7,"textPattern":"def"},{"id":"2","type":"type3","start":8,"end":12,"textPattern":"ghij"},{"id":"3","type":"type4","start":13,"end":15,"textPattern":"kl"},{"id":"4","type":"type5","start":16,"end":20,"textPattern":"mnop"}]}}]}';	
	//inJson                   = "{\"natural\":[{\"data\":{\"moments\":[{\"id\":\"0\",\"type\":\"dateTime0\",\"start\":12,\"end\":21,\"textPattern\":\"yesterday\",\"textDate\":\"Tue Jun 11 13:43:54 EDT 2019\"},{\"id\":\"1\",\"type\":\"dateTime\",\"start\":33,\"end\":38,\"textPattern\":\"today\",\"textDate\":\"Wed Jun 12 13:43:54 EDT 2019\"},{\"id\":\"2\",\"type\":\"dateTime\",\"start\":54,\"end\":62,\"textPattern\":\"tomorrow\",\"textDate\":\"Thu Jun 13 13:43:54 EDT 2019\"}]},\"text\":\" Learn from yesterday , live for today , and hope for tomorrow . \"}]}"
	//inAtt1                    = "natural";
	//inAtt2                    = "data";
	//inAtt3                    = "moments"; //"motifs";			

	 //'{"unstructured":[{"text":"Mr. is a 53-year-old male. He has a previous medical history significant for right cortical cerebral vascular accident. It is believed to be secondary to an embolus from a patent foramen ovale, and stage IV adenocarcinoma of the right lung. He has multiple bilateral pulmonary nodules, and tumor is m1 stage. Status post right lower lobe lobectomy and chemotherapy . He has carboplatin/pemetrexed times four cycles initiating in February of 2014.\n","data":{"concepts":[{"cui":"C2347167","preferredName":"Mr. - Title","semanticType":"cnce","source":"umls","sourceVersion":"2018AA","type":"umls.ConceptualEntity","begin":0,"end":3,"coveredText":"Mr.","negated":false,"hypothetical":false,"nciCode":"C69166","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C1292718","preferredName":"Is a","semanticType":"ftcn","source":"umls","sourceVersion":"2018AA","type":"umls.FunctionalConcept","begin":4,"end":8,"coveredText":"is a","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"116680003","vocabs":"SNOMEDCT_US"},{"cui":"C0439234","preferredName":"year","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"nciCode":"C29848","disambiguationData":{"validity":"VALID"},"snomedConceptId":"258707000","vocabs":"CHV,NCI_UCUM,MTH,NCI_CDISC,NCI,SNOMEDCT_US,NCI_NCPDP,HL7V3.0"},{"cui":"C1561543","preferredName":"Transaction counts and value totals - year","semanticType":"inpr","source":"umls","sourceVersion":"2018AA","type":"umls.IntellectualProduct","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C1561544","preferredName":"Precision - year","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C0580836","preferredName":"Old","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":17,"end":20,"coveredText":"old","negated":false,"hypothetical":false,"nciCode":"C65010","disambiguationData":{"validity":"VALID"},"snomedConceptId":"70753007","vocabs":"MTH,CHV,NCI,SNOMEDCT_US"},{"cui":"C0677546","preferredName":"Old episode","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":17,"end":20,"coveredText":"old","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"272131007","vocabs":"MTH,SNOMEDCT_US"},{"cui":"C0086582","preferredName":"Males","semanticType":"orga","source":"umls","sourceVersion":"2018AA","type":"umls.OrganismAttribute","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"uid":3,"loincId":"LA2-8","nciCode":"C20197","disambiguationData":{"validity":"VALID"},"snomedConceptId":"10052007,248153007","meshId":"M0012923","vocabs":"MTH,NCI_NICHD,LNC,CSP,MSH,HL7V2.5,HL7V3.0,LCH,CHV,NCI_CDISC,NCI_FDA,NCI,AOD,QMR,NDFRT,SNOMEDCT_US,DXP"},{"cui":"C1706180","preferredName":"Male Gender, Self Report","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46109","disambiguationData":{"validity":"VALID"},"vocabs":"MTH,NCI"},{"cui":"C1706428","preferredName":"Male Phenotype","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46112","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI_CDISC,NCI"},{"cui":"C1706429","preferredName":"Male, Self-Reported","semanticType":"orga","source":"umls","sourceVersion":"2018AA","type":"umls.OrganismAttribute","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46107","disambiguationData":{"validity":"VALID"},"vocabs":"MTH,NCI"},{"cui":"C3539897","preferredName":"Have","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":30,"end":33,"coveredText":"has","negated":false,"hypothetical":false,"nciCode":"C101282","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C0205156","preferredName":"Previous","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":36,"end":44,"coveredText":"previous","negated":false,"hypothetical":false,"loincId":"LP21061-4","nciCode":"C25627","disambiguationData":{"validity":"VALID"},"snomedConceptId":"9130008","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,SNOMEDCT_US"},{"cui":"C1552607","preferredName":"Act Relationship Subset - previous","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":36,"end":44,"coveredText":"previous","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C1704706","preferredName":"Medical History Domain","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":45,"end":60,"coveredText":"medical history","negated":false,"hypothetical":false,"nciCode":"C49603","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI_CDISC,NCI"},{"cui":"C0262926","preferredName":"Medical History","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":45,"end":60,"coveredText":"medical history","negated":false,"hypothetical":false,"loincId":"MTHU000077,LP7800-8,LP128548-7,MTHU040244,LP91302-7","nciCode":"C18772","disambiguationData":{"validity":"VALID"},"snomedConceptId":"392521001","vocabs":"MTH,LNC,CHV,NCI_NICHD,NCI,AOD,SNOMEDCT_US,AIR,NCI_NCI-GLOSS"},{"cui":"C0237881","preferredName":"Statistical Significance","semanticType":"qnco","source":"umls","sourceVersion":"2018AA","type":"umls.QuantitativeConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"nciCode":"C61040","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,CHV,NCI,NCI_NCI-GLOSS"},{"cui":"C0750502","preferredName":"Significant","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"nciCode":"C41130","disambiguationData":{"validity":"VALID"},"snomedConceptId":"386134007","vocabs":"MTH,CHV,NCI,SNOMEDCT_US"},{"cui":"C1546944","preferredName":"Event Seriousness - Significant","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C0521125","preferredName":"Preposition For","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":73,"end":76,"coveredText":"for","negated":false,"hypothetical":false,"nciCode":"C64956","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"86495002","vocabs":"MTH,NCI,SNOMEDCT_US"},{"cui":"C0035621","preferredName":"rights","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"CHV"},{"cui":"C0205090","preferredName":"Right","semanticType":"spco","source":"umls","sourceVersion":"2018AA","type":"umls.SpatialConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"loincId":"LA4306-2,LP35055-0,LP199953-3","nciCode":"C25228","disambiguationData":{"validity":"VALID"},"snomedConceptId":"24028007","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,UWDA,HL7V2.5,SNOMEDCT_US"},{"cui":"C0444532","preferredName":"Right sided","semanticType":"spco","source":"umls","sourceVersion":"2018AA","type":"umls.SpatialConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"nciCode":"C124581","disambiguationData":{"validity":"VALID"},"snomedConceptId":"264180000","vocabs":"MTH,CHV,NCI_CDISC,NCI,HPO,SNOMEDCT_US"},{"cui":"C1552823","preferredName":"Table Cell Horizontal Align - right","semanticType":"ftcn","source":"umls","sourceVersion":"2018AA","type":"umls.FunctionalConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C0001613","preferredName":"Adrenal Cortex","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"LP16667-5","nciCode":"C12396","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"68594002","meshId":"M0000476","vocabs":"MTH,LCH,LNC,CHV,MSH,NCI,LCH_NW,AOD,UWDA,SNOMEDCT_US,FMA,NCI_NCI-GLOSS"},{"cui":"C0007776","preferredName":"Cerebral cortex","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"MTHU050131,LP101929-0","nciCode":"C12443","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"40146001","meshId":"M0003878","vocabs":"LCH,LNC,MTH,CHV,NCI_CDISC,CSP,MSH,LCH_NW,NCI,AOD,SNOMEDCT_US,FMA"},{"cui":"C0022655","preferredName":"Structure of cortex of kidney","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"LP213638-2","nciCode":"C12739","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"50403003","meshId":"M0012012","vocabs":"MTH,CHV,LNC,NCI_CDISC,CSP,MSH,LCH_NW,NCI,AOD,UWDA,SNOMEDCT_US,FMA"},{"cui":"C0038454","preferredName":"Cerebrovascular accident","semanticType":"dsyn","source":"umls","sourceVersion":"2018AA","type":"umls.DiseaseOrSyndrome","begin":92,"end":118,"coveredText":"cerebral vascular accident","negated":false,"hypothetical":false,"uid":4,"icd9Code":"434.91","loincId":"LA22099-8,MTHU020801","icd10Code":"I63.9","nciCode":"C3390","disambiguationData":{"validity":"VALID"},"snomedConceptId":"230690007","meshId":"M0328070","vocabs":"LNC,MTH,NCI_NICHD,CSP,MSH,CST,HPO,OMIM,NCI_CTCAE,COSTAR,NCI_NCI-GLOSS,ICPC,CHV,NCI_CDISC,NCI_FDA,MEDLINEPLUS,NCI,AOD,NDFRT,SNOMEDCT_US,DXP"},{"cui":"C0175668","preferredName":"Secondary to","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":141,"end":153,"coveredText":"secondary to","negated":false,"hypothetical":false,"loincId":"LP263805-6,LA18924-3","nciCode":"C25667","disambiguationData":{"validity":"VALID"},"snomedConceptId":"2603003","vocabs":"MTH,CHV,LNC,NCI,SNOMEDCT_US"},{"cui":"C1704212","preferredName":"Embolus","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":157,"end":164,"coveredText":"embolus","negated":false,"hypothetical":false,"nciCode":"C50547","disambiguationData":{"validity":"VALID"},"snomedConceptId":"55584005","meshId":"M0007249","vocabs":"MTH,NCI_CDISC,NCI_FDA,MSH,NCI,CST,SNOMEDCT_US"},{"cui":"C1517320","preferredName":"From","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":165,"end":169,"coveredText":"from","negated":false,"hypothetical":false,"nciCode":"C25516","disambiguationData":{"validity":"INVALID"},"vocabs":"NCI"},{"cui":"C0016522","preferredName":"Foramen Ovale, Patent","semanticType":"cgab","source":"umls","sourceVersion":"2018AA","type":"umls.CongenitalAbnormality","begin":172,"end":192,"coveredText":"patent foramen ovale","negated":false,"hypothetical":false,"uid":5,"icd10Code":"Q21.1","nciCode":"C34619","disambiguationData":{"validity":"VALID"},"snomedConceptId":"204317008","meshId":"M0009965","vocabs":"MTH,CHV,CSP,MSH,CST,NCI,HPO,OMIM,NDFRT,SNOMEDCT_US,DXP"},{"cui":"C0441772","preferredName":"Stage level 4","semanticType":"inpr","source":"umls","sourceVersion":"2018AA","type":"umls.IntellectualProduct","begin":198,"end":206,"coveredText":"stage IV","negated":false,"hypothetical":false,"uid":6,"loincId":"LA6386-2,LA3651-2","nciCode":"C27971","disambiguationData":{"validity":"VALID"},"snomedConceptId":"91387004,258228008","vocabs":"MTH,LNC,CHV,NCI,SNOMEDCT_US"},{"cui":"C0001418","preferredName":"Adenocarcinoma","semanticType":"neop","source":"umls","sourceVersion":"2018AA","type":"umls.NeoplasticProcess","begin":207,"end":221,"coveredText":"adenocarcinoma","negated":false,"hypothetical":false,"uid":7,"icd9Code":"199.1","loincId":"LA11900-0","icd10Code":"C80.1","nciCode":"C2852","disambiguationData":{"validity":"VALID"},"snomedConceptId":"443961001,35917007","meshId":"M0000355","vocabs":"LNC,MTH,CSP,MSH,CST,OMIM,NCI_NCI-GLOSS,LCH,CHV,NCI_CDISC,LCH_NW,NCI,AOD,NDFRT,SNOMEDCT_US"},{"cui":"C0225706","preferredName":"Right lung","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":229,"end":239,"coveredText":"right lung","negated":false,"hypothetical":false,"loincId":"MTHU030126,LA25360-1","nciCode":"C33483","disambiguationData":{"validity":"VALID"},"snomedConceptId":"3341006","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,UWDA,SNOMEDCT_US,FMA"},{"cui":"C3539897","preferredName":"Have","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":244,"end":247,"coveredText":"has","negated":false,"hypothetical":false,"nciCode":"C101282","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C0439064","preferredName":"Numerous","semanticType":"qnco","source":"umls","sourceVersion":"2018AA","type":"umls.QuantitativeConcept","begin":248,"end":256,"coveredText":"multiple","negated":false,"hypothetical":false,"loincId":"LP7748-9,LP35213-5,LA15382-7,LA15681-2","nciCode":"C17648,C78728","disambiguationData":{"validity":"VALID"},"snomedConceptId":"260396001,255204007","vocabs":"MTH,CHV,LNC,NCI_CDISC,NCI,SNOMEDCT_US"},{"cui":"C0238767","preferredName":"Bilateral","semanticType":"spco","source":"umls","sourceVersion":"2018AA","type":"umls.SpatialConcept","begin":257,"end":266,"coveredText":"bilateral","negated":false,"hypothetical":false,"loincId":"LP33970-2,LA15081-5,LA25377-5,LP199951-7","nciCode":"C13332","disambiguationData":{"validity":"VALID"},"snomedConceptId":"51440002","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,HPO,HL7V2.5,SNOMEDCT_US,PDQ,DXP,NCI_NCI-GLOSS"},{"cui":"C0748164","preferredName":"Multiple Pulmonary Nodules","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":267,"end":284,"coveredText":"pulmonary nodules","negated":false,"hypothetical":false,"icd9Code":"518.89","icd10Code":"J98.4,J84.10","nciCode":"C122408","disambiguationData":{"validity":"VALID"},"snomedConceptId":"445249002","meshId":"M0518867","vocabs":"CHV,NCI_NICHD,MSH,NCI,NDFRT,SNOMEDCT_US"},{"cui":"C0034079","preferredName":"small mass of the lung","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":267,"end":284,"coveredText":"pulmonary nodules","negated":false,"hypothetical":false,"nciCode":"C122407","disambiguationData":{"validity":"VALID"},"vocabs":"CHV,MTH,NCI,COSTAR"},{"cui":"C0027651","preferredName":"Neoplasms","semanticType":"neop","source":"umls","sourceVersion":"2018AA","type":"umls.NeoplasticProcess","begin":290,"end":295,"coveredText":"tumor","negated":false,"hypothetical":false,"uid":8,"loincId":"LP7664-8,MTHU010346,LA16304-0,LP207120-9","nciCode":"C3262","disambiguationData":{"validity":"VALID"},"snomedConceptId":"108369006","meshId":"M0014585","vocabs":"MTH,CCS_10,NCI_NICHD,LNC,CSP,MSH,CST,HPO,OMIM,NCI_CTRP-SDC,COSTAR,MTHMST,NCI_NCI-GLOSS,ICPC,CHV,LCH,CCS,MEDLINEPLUS,NCI,LCH_NW,AOD,ICD9CM,NDFRT,SNOMEDCT_US"},{"cui":"C1578706","preferredName":"Specimen Source Codes - tumor","semanticType":"inpr","source":"umls","sourceVersion":"2018AA","type":"umls.IntellectualProduct","begin":290,"end":295,"coveredText":"tumor","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C3273930","preferredName":"Tumor Mass","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":290,"end":295,"coveredText":"tumor","negated":false,"hypothetical":false,"nciCode":"C98275","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C0441971","preferredName":"Metastasis stage M1","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":299,"end":307,"coveredText":"m1 stage","negated":false,"hypothetical":false,"uid":9,"icd10Code":"C80.1,C79.9","nciCode":"C48700","disambiguationData":{"validity":"VALID"},"snomedConceptId":"55440008","vocabs":"MTH,NCI,SNOMEDCT_US"},{"cui":"C0687676","preferredName":"Post","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":309,"end":320,"coveredText":"Status post","negated":false,"hypothetical":false,"loincId":"LP32606-3,LP20512-7","nciCode":"C38008","disambiguationData":{"validity":"VALID"},"snomedConceptId":"288563008","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,SNOMEDCT_US"},{"cui":"C0231290","preferredName":"Status post","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":309,"end":320,"coveredText":"Status post","negated":false,"hypothetical":false,"disambiguationData":{"validity":"VALID"},"snomedConceptId":"237679004,255234002","vocabs":"MTH,CHV,SNOMEDCT_US"},{"cui":"C1261075","preferredName":"Structure of right lower lobe of lung","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":321,"end":337,"coveredText":"right lower lobe","negated":false,"hypothetical":false,"loincId":"LA25364-3","nciCode":"C33022","disambiguationData":{"validity":"VALID"},"snomedConceptId":"266005","vocabs":"MTH,LNC,CHV,NCI_CDISC,NCI,UWDA,SNOMEDCT_US,FMA"},{"cui":"C0023928","preferredName":"Lobectomy","semanticType":"topp","source":"umls","sourceVersion":"2018AA","type":"umls.TherapeuticOrPreventiveProcedure","begin":338,"end":347,"coveredText":"lobectomy","negated":false,"hypothetical":false,"uid":10,"nciCode":"C15272","disambiguationData":{"validity":"VALID"},"snomedConceptId":"125571002","vocabs":"CHV,NCI,SNOMEDCT_US,COSTAR,NCI_NCI-GLOSS"},{"cui":"C0013216","preferredName":"Pharmacotherapy","semanticType":"topp","source":"umls","sourceVersion":"2018AA","type":"umls.TherapeuticOrPreventiveProcedure","begin":352,"end":364,"coveredText":"chemotherapy","negated":false,"hypothetical":false,"uid":11,"nciCode":"C15986","disambiguationData":{"validity":"VALID"},"snomedConceptId":"416608005","meshId":"M0006850","vocabs":"NCI_NICHD,MTH,CHV,CSP,MSH,MEDLINEPLUS,NCI,AOD,SNOMEDCT_US,HL7V3.0,NCI_NCI-GLOSS"},{"cui":"C0013217","preferredName":"pharmacotherapeutic","semanticType":"ftcn","source":"umls","sourceVersion":"2018AA","type":"umls.FunctionalConcept","begin":352,"end":364,"coveredText":"chemotherapy","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"meshId":"M0030372","vocabs":"MTH,MSH"},{"cui":"C0392920","preferredName":"Chemotherapy Regimen","semanticType":"topp","source":"umls","sourceVersion":"2018AA","type":"umls.TherapeuticOrPreventiveProcedure","begin":352,"end":364,"coveredText":"chemotherapy","negated":false,"hypothetical":false,"uid":12,"nciCode":"C62634","disambiguationData":{"validity":"VALID"},"snomedConceptId":"716872004","vocabs":"MTH,CHV,CCS_10,CSP,IBMEXTENSION,CCS,NCI,SNOMEDCT_US"},{"cui":"C3665472","preferredName":"Chemotherapy","semanticType":"topp","source":"umls","sourceVersion":"2018AA","type":"umls.TherapeuticOrPreventiveProcedure","begin":352,"end":364,"coveredText":"chemotherapy","negated":false,"hypothetical":false,"loincId":"LA6172-6,MTHU010425","nciCode":"C15632","disambiguationData":{"validity":"VALID"},"snomedConceptId":"367336001,363688001","vocabs":"LNC,MTH,CSP,NCI_NCI-GLOSS,LCH,CHV,CCS,MEDLINEPLUS,LCH_NW,NCI,AOD,SNOMEDCT_US,PDQ"},{"cui":"C3539897","preferredName":"Have","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":370,"end":373,"coveredText":"has","negated":false,"hypothetical":false,"nciCode":"C101282","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C0079083","preferredName":"Carboplatin","semanticType":"orch","source":"umls","sourceVersion":"2018AA","type":"umls.OrganicChemical","begin":374,"end":385,"coveredText":"carboplatin","negated":false,"hypothetical":false,"rxNormId":"40048","nciCode":"C1282","disambiguationData":{"validity":"VALID"},"snomedConceptId":"386905002,108759002","meshId":"M0024707","vocabs":"MTH,CSP,MSH,RXNORM,MTHSPL,NCI_NCI-GLOSS,CHV,ATC,NCI_FDA,NCI,NDFRT,SNOMEDCT_US,PDQ,DRUGBANK,NCI_DTP,VANDF"},{"cui":"C0079083","preferredName":"Carboplatin","semanticType":"phsu","source":"umls","sourceVersion":"2018AA","type":"umls.PharmacologicSubstance","begin":374,"end":385,"coveredText":"carboplatin","negated":false,"hypothetical":false,"uid":13,"rxNormId":"40048","nciCode":"C1282","disambiguationData":{"validity":"VALID"},"snomedConceptId":"386905002,108759002","meshId":"M0024707","vocabs":"MTH,CSP,MSH,RXNORM,MTHSPL,NCI_NCI-GLOSS,CHV,ATC,NCI_FDA,NCI,NDFRT,SNOMEDCT_US,PDQ,DRUGBANK,NCI_DTP,VANDF"},{"cui":"C0210657","preferredName":"pemetrexed","semanticType":"orch","source":"umls","sourceVersion":"2018AA","type":"umls.OrganicChemical","begin":386,"end":396,"coveredText":"pemetrexed","negated":false,"hypothetical":false,"rxNormId":"68446","nciCode":"C61614","disambiguationData":{"validity":"VALID"},"snomedConceptId":"409159000,411089001","meshId":"M0227083","vocabs":"MTH,MSH,RXNORM,MTHSPL,CHV,ATC,NCI_FDA,NCI,NDFRT,SNOMEDCT_US,PDQ,DRUGBANK,VANDF"},{"cui":"C0210657","preferredName":"pemetrexed","semanticType":"phsu","source":"umls","sourceVersion":"2018AA","type":"umls.PharmacologicSubstance","begin":386,"end":396,"coveredText":"pemetrexed","negated":false,"hypothetical":false,"uid":14,"rxNormId":"68446","nciCode":"C61614","disambiguationData":{"validity":"VALID"},"snomedConceptId":"409159000,411089001","meshId":"M0227083","vocabs":"MTH,MSH,RXNORM,MTHSPL,CHV,ATC,NCI_FDA,NCI,NDFRT,SNOMEDCT_US,PDQ,DRUGBANK,VANDF"},{"cui":"C0040223","preferredName":"Time","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"loincId":"MTHU009151,LP6879-3","nciCode":"C25207","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"410669006,410670007","meshId":"M0021539","vocabs":"LCH,LNC,NCI_NICHD,MTH,CHV,MSH,LCH_NW,NCI,SNOMEDCT_US"},{"cui":"C0392761","preferredName":"Timed","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"59974008","vocabs":"MTH,CHV,SNOMEDCT_US"},{"cui":"C1547403","preferredName":"Data types - Time","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C1548318","preferredName":"Value type - Time","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C1632851","preferredName":"Times","semanticType":"qnco","source":"umls","sourceVersion":"2018AA","type":"umls.QuantitativeConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"disambiguationData":{"validity":"VALID"},"snomedConceptId":"417929005","vocabs":"MTH,SNOMEDCT_US"},{"cui":"C3541383","preferredName":"Time (foundation metadata concept)","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":397,"end":402,"coveredText":"times","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"900000000000475002","vocabs":"MTH,SNOMEDCT_US"},{"cui":"C0205450","preferredName":"Four","semanticType":"qnco","source":"umls","sourceVersion":"2018AA","type":"umls.QuantitativeConcept","begin":403,"end":407,"coveredText":"four","negated":false,"hypothetical":false,"nciCode":"C66835","disambiguationData":{"validity":"VALID"},"snomedConceptId":"9362000","vocabs":"MTH,NCI,SNOMEDCT_US"},{"cui":"C1511572","preferredName":"event cycle","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":408,"end":414,"coveredText":"cycles","negated":false,"hypothetical":false,"nciCode":"C25472","disambiguationData":{"validity":"VALID"},"vocabs":"MTH,NCI_UCUM,NCI,LCH_NW"},{"cui":"C3830166","preferredName":"February","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":429,"end":437,"coveredText":"February","negated":false,"hypothetical":false,"nciCode":"C106181","disambiguationData":{"validity":"VALID"},"vocabs":"NCI"}],"conceptValues":[{"cui":"C0001779","preferredName":"age","unit":"years","value":"53","type":"ConceptValue","begin":9,"end":20,"coveredText":"53-year-old","negated":false,"hypothetical":false,"uid":2},{"cui":"C0040223","preferredName":"Time","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C3541383","preferredName":"Time (foundation metadata concept)","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C1548318","preferredName":"Value type - Time","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C0392761","preferredName":"Timed","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C1547403","preferredName":"Data types - Time","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C1632851","preferredName":"Times","trigger":"equal to","value":"4","type":"ConceptValue","begin":397,"end":407,"coveredText":"times four","negated":false,"hypothetical":false},{"cui":"C3830166","preferredName":"February","trigger":"equal to","value":"2014","type":"ConceptValue","begin":429,"end":445,"coveredText":"February of 2014","negated":false,"hypothetical":false}],"attributeValues":[{"preferredName":"age","values":[{"value":"53","unit":"years"}],"source":"General Medical","conceptValue":{"uid":2},"begin":9,"end":20,"coveredText":"53-year-old","negated":false,"hypothetical":false,"name":"PatientAge"},{"preferredName":"Males","values":[{"value":"male"}],"source":"General Medical","concept":{"uid":3},"begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"loincId":"LA2-8","nciCode":"C20197","name":"Gender","disambiguationData":{"validity":"VALID"},"snomedConceptId":"10052007,248153007","meshId":"M0012923"},{"preferredName":"Cerebrovascular accident","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":4},"begin":92,"end":118,"coveredText":"cerebral vascular accident","hypothetical":false,"icd9Code":"434.91","loincId":"LA22099-8,MTHU020801","icd10Code":"I63.9","nciCode":"C3390","name":"Disease","disambiguationData":{"validity":"VALID"},"snomedConceptId":"230690007","meshId":"M0328070"},{"preferredName":"Foramen Ovale, Patent","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":5},"begin":172,"end":192,"coveredText":"patent foramen ovale","hypothetical":false,"icd10Code":"Q21.1","nciCode":"C34619","name":"Disease","disambiguationData":{"validity":"VALID"},"snomedConceptId":"204317008","meshId":"M0009965"},{"preferredName":"Stage level 4","values":[{"value":"IV"}],"source":"General Cancer","concept":{"uid":6},"begin":198,"end":206,"coveredText":"stage IV","negated":false,"hypothetical":false,"loincId":"LA6386-2,LA3651-2","nciCode":"C27971","name":"TumorStage","disambiguationData":{"validity":"VALID"},"snomedConceptId":"91387004,258228008"},{"preferredName":"Adenocarcinoma","values":[{"value":"adenocarcinoma"}],"source":"General Cancer","concept":{"uid":7},"begin":207,"end":221,"coveredText":"adenocarcinoma","negated":false,"hypothetical":false,"icd9Code":"199.1","loincId":"LA11900-0","icd10Code":"C80.1","nciCode":"C2852","name":"Histology","disambiguationData":{"validity":"VALID"},"snomedConceptId":"443961001,35917007","meshId":"M0000355"},{"preferredName":"Adenocarcinoma","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":7},"begin":207,"end":221,"coveredText":"adenocarcinoma","hypothetical":false,"icd9Code":"199.1","loincId":"LA11900-0","icd10Code":"C80.1","nciCode":"C2852","name":"Disease","disambiguationData":{"validity":"VALID"},"snomedConceptId":"443961001,35917007","meshId":"M0000355"},{"preferredName":"Adenocarcinoma","values":[{"value":"Adenocarcinoma"}],"source":"General Cancer","concept":{"uid":7},"begin":207,"end":221,"coveredText":"adenocarcinoma","negated":false,"hypothetical":false,"icd9Code":"199.1","loincId":"LA11900-0","icd10Code":"C80.1","nciCode":"C2852","name":"CancerType","disambiguationData":{"validity":"VALID"},"snomedConceptId":"443961001,35917007","meshId":"M0000355"},{"preferredName":"Neoplasms","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":8},"begin":290,"end":295,"coveredText":"tumor","hypothetical":false,"loincId":"LP7664-8,MTHU010346,LA16304-0,LP207120-9","nciCode":"C3262","name":"Disease","disambiguationData":{"validity":"VALID"},"snomedConceptId":"108369006","meshId":"M0014585"},{"preferredName":"Neoplasms","values":[{"value":"SolidTumor"}],"source":"General Cancer","concept":{"uid":8},"begin":290,"end":295,"coveredText":"tumor","negated":false,"hypothetical":false,"loincId":"LP7664-8,MTHU010346,LA16304-0,LP207120-9","nciCode":"C3262","name":"CancerType","disambiguationData":{"validity":"VALID"},"snomedConceptId":"108369006","meshId":"M0014585"},{"preferredName":"Metastasis stage M1","values":[{"value":"M1"}],"source":"General Cancer","concept":{"uid":9},"begin":299,"end":307,"coveredText":"m1 stage","negated":false,"hypothetical":false,"icd10Code":"C80.1,C79.9","nciCode":"C48700","name":"cMCategory","disambiguationData":{"validity":"VALID"},"snomedConceptId":"55440008"},{"preferredName":"Lobectomy","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":10},"begin":338,"end":347,"coveredText":"lobectomy","hypothetical":false,"nciCode":"C15272","name":"Procedure","disambiguationData":{"validity":"VALID"},"snomedConceptId":"125571002"},{"preferredName":"Pharmacotherapy","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":11},"begin":352,"end":364,"coveredText":"chemotherapy","hypothetical":false,"nciCode":"C15986","name":"Procedure","disambiguationData":{"validity":"VALID"},"snomedConceptId":"416608005","meshId":"M0006850"},{"preferredName":"Chemotherapy Regimen","values":[{"value":"true"}],"source":"General Cancer","concept":{"uid":12},"begin":352,"end":364,"coveredText":"chemotherapy","hypothetical":false,"nciCode":"C62634","name":"ChemotherapyRegimen","disambiguationData":{"validity":"VALID"},"snomedConceptId":"716872004"},{"preferredName":"Carboplatin","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":13},"begin":374,"end":385,"coveredText":"carboplatin","hypothetical":false,"rxNormId":"40048","nciCode":"C1282","name":"Medication","disambiguationData":{"validity":"VALID"},"snomedConceptId":"386905002,108759002","meshId":"M0024707"},{"preferredName":"pemetrexed","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":14},"begin":386,"end":396,"coveredText":"pemetrexed","hypothetical":false,"rxNormId":"68446","nciCode":"C61614","name":"Medication","disambiguationData":{"validity":"VALID"},"snomedConceptId":"409159000,411089001","meshId":"M0227083"}]}}]}';
	inJson = '{"unstructured":[{"text":"Mr. is a 53-year-old male. He has a previous medical history significant for right cortical cerebral vascular accident.","data":{"concepts":[{"cui":"C2347167","preferredName":"Mr. - Title","semanticType":"cnce","source":"umls","sourceVersion":"2018AA","type":"umls.ConceptualEntity","begin":0,"end":3,"coveredText":"Mr.","negated":false,"hypothetical":false,"nciCode":"C69166","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C1292718","preferredName":"Is a","semanticType":"ftcn","source":"umls","sourceVersion":"2018AA","type":"umls.FunctionalConcept","begin":4,"end":8,"coveredText":"is a","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"116680003","vocabs":"SNOMEDCT_US"},{"cui":"C0439234","preferredName":"year","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"nciCode":"C29848","disambiguationData":{"validity":"VALID"},"snomedConceptId":"258707000","vocabs":"CHV,NCI_UCUM,MTH,NCI_CDISC,NCI,SNOMEDCT_US,NCI_NCPDP,HL7V3.0"},{"cui":"C1561543","preferredName":"Transaction counts and value totals - year","semanticType":"inpr","source":"umls","sourceVersion":"2018AA","type":"umls.IntellectualProduct","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C1561544","preferredName":"Precision - year","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":12,"end":16,"coveredText":"year","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C0580836","preferredName":"Old","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":17,"end":20,"coveredText":"old","negated":false,"hypothetical":false,"nciCode":"C65010","disambiguationData":{"validity":"VALID"},"snomedConceptId":"70753007","vocabs":"MTH,CHV,NCI,SNOMEDCT_US"},{"cui":"C0677546","preferredName":"Old episode","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":17,"end":20,"coveredText":"old","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"snomedConceptId":"272131007","vocabs":"MTH,SNOMEDCT_US"},{"cui":"C0086582","preferredName":"Males","semanticType":"orga","source":"umls","sourceVersion":"2018AA","type":"umls.OrganismAttribute","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"uid":3,"loincId":"LA2-8","nciCode":"C20197","disambiguationData":{"validity":"VALID"},"snomedConceptId":"10052007,248153007","meshId":"M0012923","vocabs":"MTH,NCI_NICHD,LNC,CSP,MSH,HL7V2.5,HL7V3.0,LCH,CHV,NCI_CDISC,NCI_FDA,NCI,AOD,QMR,NDFRT,SNOMEDCT_US,DXP"},{"cui":"C1706180","preferredName":"Male Gender, Self Report","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46109","disambiguationData":{"validity":"VALID"},"vocabs":"MTH,NCI"},{"cui":"C1706428","preferredName":"Male Phenotype","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46112","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI_CDISC,NCI"},{"cui":"C1706429","preferredName":"Male, Self-Reported","semanticType":"orga","source":"umls","sourceVersion":"2018AA","type":"umls.OrganismAttribute","begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"nciCode":"C46107","disambiguationData":{"validity":"VALID"},"vocabs":"MTH,NCI"},{"cui":"C3539897","preferredName":"Have","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":30,"end":33,"coveredText":"has","negated":false,"hypothetical":false,"nciCode":"C101282","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI"},{"cui":"C0205156","preferredName":"Previous","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":36,"end":44,"coveredText":"previous","negated":false,"hypothetical":false,"loincId":"LP21061-4","nciCode":"C25627","disambiguationData":{"validity":"VALID"},"snomedConceptId":"9130008","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,SNOMEDCT_US"},{"cui":"C1552607","preferredName":"Act Relationship Subset - previous","semanticType":"tmco","source":"umls","sourceVersion":"2018AA","type":"umls.TemporalConcept","begin":36,"end":44,"coveredText":"previous","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C1704706","preferredName":"Medical History Domain","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":45,"end":60,"coveredText":"medical history","negated":false,"hypothetical":false,"nciCode":"C49603","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,NCI_CDISC,NCI"},{"cui":"C0262926","preferredName":"Medical History","semanticType":"fndg","source":"umls","sourceVersion":"2018AA","type":"umls.Finding","begin":45,"end":60,"coveredText":"medical history","negated":false,"hypothetical":false,"loincId":"MTHU000077,LP7800-8,LP128548-7,MTHU040244,LP91302-7","nciCode":"C18772","disambiguationData":{"validity":"VALID"},"snomedConceptId":"392521001","vocabs":"MTH,LNC,CHV,NCI_NICHD,NCI,AOD,SNOMEDCT_US,AIR,NCI_NCI-GLOSS"},{"cui":"C0237881","preferredName":"Statistical Significance","semanticType":"qnco","source":"umls","sourceVersion":"2018AA","type":"umls.QuantitativeConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"nciCode":"C61040","disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,CHV,NCI,NCI_NCI-GLOSS"},{"cui":"C0750502","preferredName":"Significant","semanticType":"idcn","source":"umls","sourceVersion":"2018AA","type":"umls.IdeaOrConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"nciCode":"C41130","disambiguationData":{"validity":"VALID"},"snomedConceptId":"386134007","vocabs":"MTH,CHV,NCI,SNOMEDCT_US"},{"cui":"C1546944","preferredName":"Event Seriousness - Significant","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":61,"end":72,"coveredText":"significant","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V2.5"},{"cui":"C0521125","preferredName":"Preposition For","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":73,"end":76,"coveredText":"for","negated":false,"hypothetical":false,"nciCode":"C64956","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"86495002","vocabs":"MTH,NCI,SNOMEDCT_US"},{"cui":"C0035621","preferredName":"rights","semanticType":"qlco","source":"umls","sourceVersion":"2018AA","type":"umls.QualitativeConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"CHV"},{"cui":"C0205090","preferredName":"Right","semanticType":"spco","source":"umls","sourceVersion":"2018AA","type":"umls.SpatialConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"loincId":"LA4306-2,LP35055-0,LP199953-3","nciCode":"C25228","disambiguationData":{"validity":"VALID"},"snomedConceptId":"24028007","vocabs":"LNC,MTH,CHV,NCI_CDISC,NCI,UWDA,HL7V2.5,SNOMEDCT_US"},{"cui":"C0444532","preferredName":"Right sided","semanticType":"spco","source":"umls","sourceVersion":"2018AA","type":"umls.SpatialConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"nciCode":"C124581","disambiguationData":{"validity":"VALID"},"snomedConceptId":"264180000","vocabs":"MTH,CHV,NCI_CDISC,NCI,HPO,SNOMEDCT_US"},{"cui":"C1552823","preferredName":"Table Cell Horizontal Align - right","semanticType":"ftcn","source":"umls","sourceVersion":"2018AA","type":"umls.FunctionalConcept","begin":77,"end":82,"coveredText":"right","negated":false,"hypothetical":false,"disambiguationData":{"validity":"INVALID"},"vocabs":"MTH,HL7V3.0"},{"cui":"C0001613","preferredName":"Adrenal Cortex","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"LP16667-5","nciCode":"C12396","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"68594002","meshId":"M0000476","vocabs":"MTH,LCH,LNC,CHV,MSH,NCI,LCH_NW,AOD,UWDA,SNOMEDCT_US,FMA,NCI_NCI-GLOSS"},{"cui":"C0007776","preferredName":"Cerebral cortex","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"MTHU050131,LP101929-0","nciCode":"C12443","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"40146001","meshId":"M0003878","vocabs":"LCH,LNC,MTH,CHV,NCI_CDISC,CSP,MSH,LCH_NW,NCI,AOD,SNOMEDCT_US,FMA"},{"cui":"C0022655","preferredName":"Structure of cortex of kidney","semanticType":"bpoc","source":"umls","sourceVersion":"2018AA","type":"umls.BodyPartOrganOrOrganComponent","begin":83,"end":91,"coveredText":"cortical","negated":false,"hypothetical":false,"loincId":"LP213638-2","nciCode":"C12739","disambiguationData":{"validity":"INVALID"},"snomedConceptId":"50403003","meshId":"M0012012","vocabs":"MTH,CHV,LNC,NCI_CDISC,CSP,MSH,LCH_NW,NCI,AOD,UWDA,SNOMEDCT_US,FMA"},{"cui":"C0038454","preferredName":"Cerebrovascular accident","semanticType":"dsyn","source":"umls","sourceVersion":"2018AA","type":"umls.DiseaseOrSyndrome","begin":92,"end":118,"coveredText":"cerebral vascular accident","negated":false,"hypothetical":false,"uid":4,"icd9Code":"434.91","loincId":"LA22099-8,MTHU020801","icd10Code":"I63.9","nciCode":"C3390","disambiguationData":{"validity":"VALID"},"snomedConceptId":"230690007","meshId":"M0328070","vocabs":"LNC,MTH,NCI_NICHD,CSP,MSH,CST,HPO,OMIM,NCI_CTCAE,COSTAR,NCI_NCI-GLOSS,ICPC,CHV,NCI_CDISC,NCI_FDA,MEDLINEPLUS,NCI,AOD,NDFRT,SNOMEDCT_US,DXP"}],"conceptValues":[{"cui":"C0001779","preferredName":"age","unit":"years","value":"53","type":"ConceptValue","begin":9,"end":20,"coveredText":"53-year-old","negated":false,"hypothetical":false,"uid":2}],"attributeValues":[{"preferredName":"age","values":[{"value":"53","unit":"years"}],"source":"General Medical","conceptValue":{"uid":2},"begin":9,"end":20,"coveredText":"53-year-old","negated":false,"hypothetical":false,"name":"PatientAge"},{"preferredName":"Males","values":[{"value":"male"}],"source":"General Medical","concept":{"uid":3},"begin":21,"end":25,"coveredText":"male","negated":false,"hypothetical":false,"loincId":"LA2-8","nciCode":"C20197","name":"Gender","disambiguationData":{"validity":"VALID"},"snomedConceptId":"10052007,248153007","meshId":"M0012923"},{"preferredName":"Cerebrovascular accident","values":[{"value":"true"}],"source":"General Medical","concept":{"uid":4},"begin":92,"end":118,"coveredText":"cerebral vascular accident","hypothetical":false,"icd9Code":"434.91","loincId":"LA22099-8,MTHU020801","icd10Code":"I63.9","nciCode":"C3390","name":"Disease","disambiguationData":{"validity":"VALID"},"snomedConceptId":"230690007","meshId":"M0328070"}]}}]}';	
	inAtt1 = 'unstructured';
	inAtt2 = 'data';
	inAtt3 = 'concepts';
	inObj  = JSON.parse(inJson);
	console.log(inObj);
	
	//console.log( inObj );	
	//console.log( inObj[inAtt1][0] );
	//console.log( inObj[inAtt1][0]["text"] );
	pvRun( inObj, inAtt1, inAtt2, inAtt3 );	
	    
});


/**
 * [] pod view
 */
// [] 
var pvQryObj                     = {}; // query object from users
var pvQryAtt1                    = ""; // attribute of query object
var pvQryAtt2                    = "";
var pvQryAtt3                    = "";	
var pvQryAtt4txt                 = "coveredText";
var pvQryAtt4start               = "begin";					
var pvQryAtt4end                 = "end";
var pvQryAtt4id                  = "cui";						
var pvQryAtt4type                = "type";


// [] 
var pvQryTxt                     = ""; // natural text we are interested in

var pvQryTxtFlag                 = ""; // what parts of text have been covered, and which one has not been convered 
var pvQryTxtFlagChar1            = '1'; // change pvQryTxtFlagRegex if this change
var pvQryTxtFlagChar0            = '0';
var pvQryTxtFlagRegex            = /[^1]/gi; // notice it does not have a quote or string. It is actually 'pvQryTxtFlagChar1' 

var pvQryTxtObjSrt               = "";

// [] pvDatObj is the internal representation of the pvQryObj
var pvDatObj                     = {}; 
var pvDatAtt1                    = "datum";

// 
var pvTextAreaId                 = "#pvTextAreaId";
var pvMotifAreaId                = "#pvMotifAreaId";
var pvCategoryAreaId             = "#pvCategoryAreaId";
var pvCategoryFormId             = "#idCategoryForm";

// Category
var pvCategoryDictAll    = {}; // all entries
//var pvCategoryArrayUnique = []; // unique entries of pvCategoryArrayAll 

// text
var pvTextStyleClr                = {};
var pvTextStyleSheetId            = 0; // document.styleSheets
var pvTextFlagDiscardMotif        = false; //var holdInfoFrame = true;
var pvTextStyleSheetBrightnessId1 = 49; // used to generate random color
var pvTextStyleSheetBrightnessId2 = 194; // used to generate random color

// text span
var pvTextSpanStyleClr = {};
var pvTextSpanStyleClrStr = "";
var pvTextSpanStyleSheedId = 0; // document.styleSheets




/**
 * main function
 */
function pvRun( inObj, inAtt1, inAtt2, inAtt3  ) {
	
	
	// []
	//pvTextSpanObjKeyRnd_Tst();
	//return; console.log("return");
	

	// []
	pvQryObj                     = inObj;
	pvQryAtt1                    = inAtt1;
	pvQryAtt2                    = inAtt2;
	pvQryAtt3                    = inAtt3;
	pvQryTxt                     = pvQryObj[pvQryAtt1][0]["text"];
	//pvQryTxtFlag                 = pvQryTxt;
	//console.log(pvQryTxt);
	//console.log(pvQryTxtFlag); 
	
	// [] the input is a json object
	pvQueryAnalysis();
	pvQryTxtObj = pvQueryTextObject(pvQryTxt);
		
	
	// [] style sheet
	pvHtmlStyleFnGen(); // style sheet for html page
	pvTextStyleFnGen(); // style sheet for coloring and background color
	//console.log("return"); return; 
	
	
	// [] 
	var strMotif    = '<br>';	
	var strCategory = '<form id=\"'+pvCategoryFormId.replace("#","")+'\"><ul>';	
	strCategory    += '<li><span class=\"nobr\"><input type=\"checkbox\" checked onClick=\"pvCategoryFnTurnAllOnOff(this)\"><strong>(All)</strong><br></span></li>';
	var strText     = '<div id="idText" onClick="pvMotifFnClearInverse()">';
	nowStart = 0; // current text starting 
	nowEnd   = 0; // current text ending	
	for ( let iCtrMtf = 0; iCtrMtf < Object.keys(pvDatObj).length; iCtrMtf++) {
		//console.log(iCtrMtf);
		
		// [] 
		nowObj   = pvDatObj[iCtrMtf];
		strTxt   = nowObj[pvQryAtt4txt];			
		strStart = nowObj[pvQryAtt4start];								
		strEnd   = nowObj[pvQryAtt4end];
		strId    = nowObj[pvQryAtt4id];						
		strType  = nowObj[pvQryAtt4type];
		//console.log(strTxt);
		//console.log(strId);
			
		// [] Motif Update 
		strMotif    += pvMotifFnGen(strTxt, strStart, strEnd, strId, strType);
			
		// [] Category Update
		if( pvCategoryDictAll[strType]==false) { // false means it is not in the final list yet
			strCategory += pvCategoryFnGen(strTxt, strStart, strEnd, strId, strType);
			pvCategoryDictAll[strType]=true;
		}
	
		// [] Text Span Update
		pvTextSpanFnGen(strStart, strEnd, strType); // 
		
		
		// [] Text Update
		//strText     += pvTextFnCoverageEmptyStart(nowStart, nowObj.start);			
		//strText     += pvTextFnGen(strTxt, strStart, strEnd, strId, strType);
		//console.log(strTxt);
		//nowStart    = Number(strEnd); // nowStart is used inside pvTextFnCoverageEmptyStart 					
	} 		
	// [] append the rest of the text without concept
	//nowObj = pvDatObj[Object.keys(pvDatObj).length-1];
	//strText += pvTextFnCoverageEmptyEnd(nowStart,nowObj.end);
	//strText +='</div>';
	// []
	strCategory += "</ul></form>";
	pvTextSpanFnSorting();
	pvTextSpanStyleFnGen(); // atach style sheet
	
	
	// [] 
	$(pvMotifAreaId).html(strMotif);       //console.log(strMotif);
	$(pvCategoryAreaId).html(strCategory); //console.log(strCategory);
	//$(pvTextAreaId).html(strText);    console.log(strTxt); // $(pvTextAreaId).text(strText); 
	$(pvTextAreaId).html(pvQryTxtObjSrt);
	
}


/**
 * In
 * 
 * Out
 *   Attach a stylesheet to the document body 
 * @returns
 * 
 * 
 * <style>
 * 
 * p {line-height:2; }
 * 
 * span.annotation { border-bottom:1px solid; }
 * span.annotation span.annotation { padding-bottom:2px; }
 * span.annotation span.annotation span.annotation { padding-bottom:4px; }
 * span.annotation span.annotation span.annotation span.annotation { padding-bottom:6px; }
 * 
 * span[dt-id="001"] { border-color:orange; }
 * span[dt-id="002"] { border-color:blue; }
 * span[dt-id="003"] { border-color:red; }
 * span[dt-id="004"] { border-color:green; }
 * 
 * </style>
 * 
 */
function pvHtmlStyleFnGen() {

	// []
	let strStyle1 = ".nobr { white-space: nowrap }";
	//strStyle1 += ".p { line-height:2; }";	
	strStyle1 += "p1 { line-height:4; font-size: 20px;  display: block; }";
	strStyle1 += "span.anno { border-bottom:1px solid; }";
	strStyle1 += "span.anno span.anno { padding-bottom:5px; }";
    strStyle1 += "span.anno span.anno span.anno { padding-bottom:10px; }";
    strStyle1 += "span.anno span.anno span.anno span.anno { padding-bottom:15px; }";
	strStyle1 += "span.anno span.anno span.anno span.anno span.anno { padding-bottom:20px; }";
	strStyle1 += "span.anno span.anno span.anno span.anno span.anno span.anno { padding-bottom:25px; }"; 
	strStyle1 += "span.anno span.anno span.anno span.anno span.anno span.anno span.anno { padding-bottom:30px; }";
    

	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = strStyle1;
	document.body.appendChild(sheet);		
	
} 


/**
 * In:
 *   Read from pvTextStyleClr
 * Out:
 *   Attach a stylesheet to the document body 
 *   Set pvTextStyleSheetId
 * @returns
 */
function pvTextStyleFnGen() {
	
	// []
	//strStyle = "#type1{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";	
	//strStyle += "#type2{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";
	//strStyle += "#type3{color:"+pvFnPrivateRandomColor( pvTextStyleSheetBrightnessId )+"}";
	//console.log( pvFnPrivateRandomColor(pvTextStyleSheetBrightnessId) );
	strStyle = "";
	for( var key in pvTextStyleClr ) { 
		if( pvTextStyleClr.hasOwnProperty(key) ) {
			//console.log( key + " : " + pvTextStyleClr[key] );
			strStyle += "#"+key+"{"+ pvTextStyleClr[key] +"}";	
		}				
	} 
	//console.log( " strStyle " + strStyle );
	
	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = strStyle;
	document.body.appendChild(sheet);		
	pvTextStyleSheetId=document.styleSheets.length-1;	
	//console.log("pvTextStyleSheetId:" + pvTextStyleSheetId); // going to be used in pvFnCategorySelected
}



/**
 * In
 *   pvQryObj
 * Out
 *   pvDatObj                : internal representation of pvQryObj
 *   pvTextStyleClr[strType] : color for the style
 *   pvCategoryDictAll       : valid entries of pvCategory 
 * 
 * 	
 * console.log(pvQryJson);
 * console.log(pvQryObj.natural[0].data.motifs[0].id);
 * console.log(pvQryObj.natural.length);
 * 
 * @returns
 */
function pvQueryAnalysis( qryObj ) {
	
	// [] reset the internal object
	pvDatObj = {};
	for (let iCtrNat = 0; iCtrNat < Object.keys(pvQryObj[pvQryAtt1]).length; iCtrNat++) {		
		//console.log( "iCtrNat :"+iCtrNat );		
		//console.log( Object.keys(pvQryObj[pvQryAtt1]).length );
		//console.log( Object.keys(pvQryObj[pvQryAtt1][iCtrNat]).length );
		//console.log( Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2]).length );
		//console.log( Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3]).length );
				
		for (let iCtrMtf = 0; iCtrMtf < Object.keys(pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3]).length; iCtrMtf++) {			
			//console.log( "iCtrMtf :"+ iCtrMtf +"/" + pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3] );
			
			// [] copy over to pvDatObj			            
			pvDatObj[iCtrMtf] = pvQryObj[pvQryAtt1][iCtrNat][pvQryAtt2][pvQryAtt3][iCtrMtf];				
			strTxt   = pvDatObj[iCtrMtf][pvQryAtt4txt];			
			strStart = pvDatObj[iCtrMtf][pvQryAtt4start];								
			strEnd   = pvDatObj[iCtrMtf][pvQryAtt4end];
			strId    = pvDatObj[iCtrMtf][pvQryAtt4id];						
			strType  = pvDatObj[iCtrMtf][pvQryAtt4type];
			
			//strStyle1 += "span[id=\"umls.ConceptualEntity\"] { border-color:"+pvUtlRandomColor(49)+"; border-width: 2px; }";
			pvTextSpanStyleClr[strType] = 'border-width: 2px; '
			                            + 'border-color:'+pvUtlRandomColor(49)+'; ';
			pvTextSpanStyleClrStr       += 'span[id="'+strType+'"] {'+ pvTextSpanStyleClr[strType] +'}';
			
			// [] determine the color style
			//pvTextStyleClr[strType] = "background-color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId2)
            //							+";color:"+pvUtlRandomColor(pvTextStyleSheetBrightnessId1);
			//console.log( ' pvTextStyleClr [ ' +  strType  + ' ] = '+ pvTextStyleClr[strType] );
			
			// [] pvQryTxtFlag span coverage
			//for( let iCtrCover = Number(strStart); iCtrCover< Number(strEnd); iCtrCover++) {
			//	pvQryTxtFlag = pvUtlSetCharAt( pvQryTxtFlag, iCtrCover, pvQryTxtFlagChar1);	
			//} //console.log(pvQryTxtFlag); 
			
			// [] pvCategoryArrayAll 
			pvCategoryDictAll[strType]=false; // false means it is not in the final list yet						
		}
	} 	
	//console.log(Object.keys(pvQryObj).length);
	//console.log(Object.keys(pvDatObj).length);
		
	// [] pvQryTxtFlag using pvQryTxtFlagRegex, pvQryTxtFlag1, and pvQryTxtFlag0 
	//pvQryTxtFlag = pvQryTxtFlag.replace( pvQryTxtFlagRegex , pvQryTxtFlagChar0);
	//console.log(" text :"+ pvQryTxt);
	//console.log(" flag :"+ pvQryTxtFlag);	
}


/**
 * Generate random  color based on brightness
 * 
 * If useDefault = true then return a default black color
 * If useDefault = false then generate a random color
 * @param brightness
 * @returns
 */
function pvUtlRandomColor( brightness, backColor=false, useDefault=false ) {
			
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
	  
  var valOut = '#000000';
  if( useDefault == false) {
	  valOut = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  } 
	  	  	 
  if( useDefault == true &&  backColor == true) {
	  valOut = '#FFFFFF';
  }
	  
  //console.log( " backColor:"+ backColor + ",useDefault:" + useDefault );  
  return valOut;
}


/**
 * In  : pvQryTxt
 * Out : pvQryObj
 */
function pvQueryTextObject( _qryTxt) {
	
	qryObj = {};
	_qryTxtArr = Array.from(_qryTxt);
	//console.log(_qryTxtArr);
	for( let iCtrArr=0; iCtrArr < _qryTxtArr.length; iCtrArr++) {
		qryObj[iCtrArr] = _qryTxtArr[iCtrArr];
	}
	
	//console.log(Object.keys(qryObj));
	return qryObj
}





/**
 * var str = 'Hello World';
 * str = setCharAt(str,4,',');
 * alert(str);
 * 
 * @param str
 * @param index
 * @param chr
 * @returns
 */
function pvUtlSetCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}




/**
 * 	pvMotifStr='<br>	
 * 	<div id="type1:0:3" style="display:none"><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>
 * 	<div id="type2:4:7" style="display:none"><span class="type2">Text : <b>def</b></span><br>start = 4<br>end = 7<br>textPattern = def<br>id = 1<br>type = type2<br><br></div>
 *	<div id="type3:8:12" style="display:none"><span class="type3">Text : <b>ghij</b></span><br>start = 8<br>end = 12<br>textPattern = ghij<br>id = 2<br>type = type3<br><br></div>
 *
 * //strMotif='<br>'
 * 		//+'<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 		//+'<div id="type1:0:3" style="display:none"><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 		//<div id="type2:4:7" style="display:none"><span class="type2">Text : <b>def</b></span><br>start = 4<br>end = 7<br>textPattern = def<br>id = 1<br>type = type2<br><br></div>
 *
 * //$(pvMotifAreaId).html(strMotif);
 * //$(pvMotifAreaId).text("hello");
 * 
 * +'<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';
 * 
 * 	console.log(pvMotifAreaId);
 * 
 * @returns
 */
function pvMotifFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	//	<div id="type1:0:3" ><span class="type1">Text : <b>abc</b></span><br>start = 0<br>end = 3<br>textPattern = abc<br>id = 0<br>type = type1<br><br></div>';	
	strOut  ='<div id=\"'+ strType+':'+ strStart+':'+ strEnd +'\"';
	strOut += ' style="display:none">';
	strOut=strOut+'<span class=\"'+strType+'\">'
	strOut=strOut+'Text : <b>'+strTxt+'</b>';
	strOut=strOut+'</span>';
	strOut=strOut+'<br>start = '+strStart;
	strOut=strOut+'<br>end = '+strEnd;
	strOut=strOut+'<br>textPattern = '+strTxt;
	strOut=strOut+'<br>id = '+strId;
	strOut=strOut+'<br>type = '+strType;	
	strOut=strOut+'<br><br></div>';
	return strOut;

}

function pvMotifFnClear() { //function clearInfoFrame() {
	
	if (!pvTextFlagDiscardMotif) { 
		elements = document.getElementById(pvMotifAreaId.replace('#','')).childNodes;
		for (var j = 0; j < elements.length; j++){
			if (elements[j].nodeName != 'null' && elements[j].nodeName === 'div' || elements[j].nodeName === 'DIV') {
				elements[j].style.display = 'none';
			}
		}
	}
	
}


function pvMotifFnClearInverse() {
	
	//holdInfoFrame = !holdInfoFrame;
	pvTextFlagDiscardMotif=!pvTextFlagDiscardMotif;
	if (!pvTextFlagDiscardMotif) { // !holdInfoFrame;		
		pvMotifFnClear();	
	}
	
}


function pvMotifFnShow(idToShow) {
	
	if (!pvTextFlagDiscardMotif) {		
		//var element = document.getElementById(idToShow);
		//element.style.display = 'block';		
		document.getElementById(idToShow).style.display='block';
	}
	
}







/**
 * <div id="idCategory">
 * <form id="idCategoryForm">
 *
 * <ul>
 * <li><span class="nobr"><input type="checkbox" onClick="switchOnOff(this)"><strong>(All)</strong><br></span></li>
 * <li><span id="type5" class="nobr"> <input id="type5"type="checkbox" checked onclick="fnCategorySelected(this)">type5</span></li>
 * <li><span id="type4" class="nobr"> <input id="type4"type="checkbox" checked onclick="fnCategorySelected(this)">type4</span></li>
 * <li><span id="type3" class="nobr"> <input id="type3"type="checkbox" checked onclick="fnCategorySelected(this)">type3</span></li>
 * </ul>
 * </form></div>
 * 
 * console.log(pvCategoryAreaId);
 * $(pvCategoryAreaId).text("back");
 * 
 * @param strTxt
 * @param strStart
 * @param strEnd
 * @param strId
 * @param strType
 * @returns
 */
function pvCategoryFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	//<li><span id="type5" class="nobr"> <input id="type5"type="checkbox" checked onclick="fnCategorySelected(this)">type5</span></li>
	strOut='<li><span id=\"'+ strType+'\" class=\"nobr\">';
	strOut=strOut+'<input id=\"'+strType+'\" type=\"checkbox\" checked';
	strOut=strOut+' onclick=\"pvCategoryFnSelected(this)\">';
	strOut=strOut+strType+"</span></li>";
	
	return strOut;	
}


/**
 * 
 * In
 *  pvTextSpanStyleSheetId
 *  element.id.toLowerCase()
 * 
 */
function pvCategoryFnSelected(element) {
	//console.log( "pvTextStyleSheetId     : "+ pvTextStyleSheetId ); 
	
	let rules = document.styleSheets[pvTextSpanStyleSheetId].rules || document.styleSheets[pvTextSpanStyleSheetId].cssRules;
	for (i = 0; i < rules.length; i++) {
		let newStyle = '';
		//console.log( "i/len :"+ i+"/"+rules.length );
		//console.log( " selectorText " + rules[i].selectorText.toLowerCase() );
		//console.log( "element.id.toLowerCase : " + element.id.toLowerCase() );
		
		if (rules[i].selectorText.toLowerCase() == 'span[id="' + element.id.toLowerCase()+'"]') {
			if (!element.checked) {
				newStyle = "border-color:white"; //"background:none";
			} else {				
				newStyle = pvTextSpanStyleClr[element.id];
				//console.log( element.id + " newStyle "+ newStyle );
			}
			//console.log("newStyle:"+newStyle);
			rules[i].style.cssText = newStyle;
		}
	}
	
}


/**
 * Click All or None of the categories
 * 
 * Misc Code:
 * 
 */
function pvCategoryFnTurnAllOnOff(source) {
	//console.log("pvCategoryFnTurnAllOnOff");
	console.log(source.checked);
	
	//for(x in pvTextStyleClr) { console.log( "pvFnTurnAllOnOff - x: " + x );
	let myForm = document.getElementById( pvCategoryFormId.replace("#","") );
	let myElements = myForm.getElementsByTagName("input");
	for (let iCtr = 0; iCtr < myElements.length; iCtr++){
		console.log( "i/len : "+iCtr+"/"+ myElements.length );
		//console.log( myElements[iCtr] );
		//console.log( "nodeName "+ myElements[iCtr].nodeName + " checked:" + myElements[iCtr].checked + " id " + myElements[iCtr].id );
		if (myElements[iCtr].nodeName == "INPUT" 
		 && myElements[iCtr].checked != source.checked ) {
		 //&& myElements[iCtr].id != "toogle"
			myElements[iCtr].click();
		 }
	}
	
}



/**
 *  <span id="type1" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type1:0:3')">abc</span> 
 *  <span id="type2" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type2:4:7')">def</span>  
 *  	<span id="type3" onMouseOut="clearInfoFrame()" onMouseOver="showInfo('type3:8:12')">ghij</span>
 *  
 *  console.log(pvTextAreaId);
 *  $(pvTextAreaId).text("world"); 
 * @returns
 */
function pvTextFnGen(strTxt, strStart, strEnd, strId, strType) {
	
	strOut  = '<span id=\"'+strType+'\"  ';
	strOut += 'onMouseOver="pvMotifFnShow(\''+strType+':'+ strStart+':'+ strEnd+'\')"';
	strOut += 'onMouseOut="pvMotifFnClear()"';
	strOut += '>';
	strOut += strTxt+'</span> ';
	
	return strOut;	
}





function pvTextFnCoverageEmptyStart( _nowStart, _strStart) {
	
	_nowStart = Math.min( _nowStart,Number( _strStart));
	_nowEnd   = _nowStart;
	while( pvQryTxtFlag.charAt( _nowEnd) == pvQryTxtFlagChar0 ) {
		_nowEnd = _nowEnd+1;				
	} 

	return pvQryTxt.substring(_nowStart, _nowEnd);
}

function pvTextFnCoverageEmptyEnd( _nowStart, _strEnd) {
		
	
	//strEnd   = nowObj.end;
	_nowStart = Math.min(_nowStart,Number(_strEnd));
	_nowEnd   = _nowStart;
	while( pvQryTxtFlag.charAt( _nowEnd) == pvQryTxtFlagChar0 ) {
		_nowEnd = _nowEnd+1;				
	} 

	return pvQryTxt.substring(_nowStart, _nowEnd); 
}



/**
 * dsm7
 * 
 * Converting the pvQryTxt into pvQryTxtObj
 *     pvQryTxtObj = pvQueryTextObject(pvQryTxt);
 *     
 * 
 * 
 * In : pvTxtQryObj
 *   strStart : 
 *   strEnd   : 
 *   strType  :
 * Out : 
 * 
 */
function pvTextSpanFnGen( strStart, strEnd, strType) {

	//console.log(" type-start-end     : "+strType+"-"+strStart+"-"+strEnd);
	//console.log(" pvQryTxtObj.length : "+Object.keys(pvQryTxtObj).length);
	
	strTmp  = '<span id=\"'+strType+'\" ';
	strTmp += ' class=\"anno\" ';
	strTmp += 'onMouseOver="pvMotifFnShow(\''+strType+':'+ strStart+':'+ strEnd+'\')"';
	strTmp += 'onMouseOut="pvMotifFnClear()"';
	strTmp += '>';

	pvQryTxtObj[ pvTextSpanObjKeyRnd(pvQryTxtObj, strStart, true ) ]=strTmp;
	pvQryTxtObj[ pvTextSpanObjKeyRnd(pvQryTxtObj, strEnd  , false) ]="</span>";
	//console.log( pvQryTxtObj );
	
}


function pvTextSpanObjKeyRnd( _dict, _value, _flagStartNotEnd ) {
   /**
	* _value is an integer lower bound
	* check if the dictionary contains the _value or not
	* append a random number to the _value
	* response with a new real number that can be used as a key
	*/
	
	let keyNew = _value;
	while( _dict.hasOwnProperty(keyNew) ) {
		
		if( _flagStartNotEnd == true ) {
			keyNew = Number(_value)-Number(Math.random()/1e6);
	    } else {
			keyNew = Number(_value)+Number(Math.random()/1e6);
		} 	
		//console.log(keyNew);
	}
	
	// [] console.log(keyNew);	
	return keyNew;
}

function pvTextSpanObjKeyRnd_Tst() {
	
	aa = {}; //Array.split("Mr Dsm");
	aa[0]='s';
	aa[1]='b';
	console.log( pvTextSpanObjKeyRnd( aa, 0, true ) );
	
}

/**
 * 
 * 
 * pvQryTxtObj is an array of characters
 * Finally, enclose the whole text area into <p1></p1>
 * 
 * 
 * In:
 *  pvQryTxtObj
 * Out:
 *  pvQryTxtObjSrt
 *  
 */
function pvTextSpanFnSorting() {
		
	// sort an object
	// convert a dictionary into array of array
	var pvQryTxtObjArr = Object.keys(pvQryTxtObj).map( function(key) {
		return [key, pvQryTxtObj[key]];
	});
	pvQryTxtObjArr.sort( function(first,second) {
		return Number(first[0]) - Number(second[0]) ;
	});	
	//console.log(pvQryTxtObjArr);
	//console.log( Object.values(pvQryTxtObjArr).join() );
	
	// [] joining
	pvQryTxtObjSrt += "<p1>";
	pvQryTxtObjArr.forEach(function(itemVal,itemIdx) {
		//console.log(itemIdx + " : " + " k: "+ itemVal[0] + " v: "+ itemVal[1]);
		pvQryTxtObjSrt += itemVal[1];
	});
	pvQryTxtObjSrt += "</p1>";
	
	//console.log(pvQryTxtObjSrt);
	//return pvQryTxtObjSrt = "";
}


/**
 * In:
 *  pvTextSpanStyleClrStr
 * Out:
 * 
 */
function pvTextSpanStyleFnGen() {
	
	// [] 
	sheet = document.createElement('style');
	sheet.innerHTML = pvTextSpanStyleClrStr;
	document.body.appendChild(sheet);	
	pvTextSpanStyleSheetId =document.styleSheets.length-1; 	

}


function click1() {
	
	console.log(' click1 '+ $(idQuery).val() );
}

function click2() {
	console.log(' click2 '+ $(idResponse).val("wilKen"));
}
