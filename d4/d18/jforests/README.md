# JForests


- [What are the main operations](#what-are-the-main-operations)
    - [How to do a compression operation](#how-to-do-a-compression-operation)
    - [How to do a clustering operation](#how-to-do-a-clustering-operation)
    - [How to do a ranking operation](#how-to-do-a-ranking-operation)
- [What are the packages in the original jforests?](#what-are-the-packages-in-the-original-jforests)
- [What is the purpose of the Dataset Package?](#what-is-the-purpose-of-the-dataset-package)
- [What is FeatureAnalyzer?](#what-is-featureanalyzer)
- [What is the purpose of the Input Package?](#what-is-the-purpose-of-the-input-package)

- [Customization](#customization)
    - [How to start customization](#how-to-start-customization)
    - [BinFileConverterCluster](#bin-file-converter-cluster)
    - [What is Byte](#what-is-byte) 
        - [What is Byte Array?](#what-is-byte-array) 
        - [What is Byte Buffer?](#what-is-byte-buffer)
    - [What is a custom input package?](#what-is-a-custom-input-package)
    - [What is a custom dataset package?](#what-is-a-custom-dataset-package)             
- [Timeline](#timeline)
- [ToDo](#todo)
- [Template](#template)


## Table of Contents





## What are the main operations ?

There are three main operations, i.e,
  - compression by generating binary representation for the feature
  - clustering
  - ranking

GoTo: [jfs](#jforests)	


## How to do a compression operation ?

- Runner uses a Raw2BinConverter to convert all training files inside a folder
- Raw2BinConverter - 
- FeatureAnalyzer 
    - It processes each training file
    - It creates a statistic file
- DiscreteSparseTextFileGenerator.convert
- BinaryFileGenerator

GoTo: [jfs](#jforests)	


## How to do a clustering operation ?

GoTo: [jfs](#jforests)		

## How to do a ranking operation ?

GoTo: [jfs](#jforests)		


## What are the packages in the original jforests?

Packages in jforests are as follows.
  - application - 
  - config      - 
  - util        - Util converts primitive types to the byte array
  - tools       - categorical features
 
The features, input and dataset packages
  - dataset  -  	  
  - input    -   
  - sample   -
  
The evaluation 
  - learning
  - eval
  - tuning 
	
GoTo: [jfs](#jforests)		

## What is the purpose of the Dataset package?

The dataset package deals with the management of ByteSerializable classes.
ByteSerializable interface is implemented by both the feature and the numeric arrays for byte bit, int, short and long.
The feature class has a numeric array member; which is also ByteSerializable 

- Histogram is an abstract class with a feature as one of the member
- Dataset   has a feature array

GoTo: [jfs](#jforests)		


## What is the purpose of the Input package?


The input package deals with the **extraction** of feature structures from raw texts that are appropriate for different actions; such as compression, clustering, and ranking operation.


The input/sparse package is useful for reading in a sparse feature format

- SparseTextFileReader
- SparseTextFileLine
    - MetaData 
    - MetaLineParser
    - FeatureMetaData

The clustering operation are dealt with the following files

- BinFileReader
- BinFileWriter
- BinFileGenerator
- Raw2BinFileConverter


The ranking operation are dealt with the following files

- BinFileReaderRanker
- BinFileWriterRanker
- BinFileGeneratorRanker
- RankingRaw2BinConverter

Both the clustering and ranking used the same

- DiscreteSparseTextFileGenerator 




- FeatureAnalyzer
- FeatureStatistics
- OriginalFeatureValues
- FeatureValuePair


GoTo: [Top](#jforests)		



## What is FeatureAnalyzer?

- FeatureAnalyzer accepts a list of feature files and returns feature statistics
- It represents each feature by a fid in a HashMap<Integer,String> fid2name.
- It represents each feature statistics in a HashMap<Integer,FeatureStatistics> fid2statistics.
- The maximum number of feature value is an integer MAX_FEATURE_VALUE = Short.MAX_VALUE - 1;
- A feature is discretized using a log scale when the max-min range of the feature value is beyond MAX_FEATURE_VALUE. 
if the onLogScale boolean value is set to true	

- It keeps tracks of the maximum and minimum values of the features
- The factor of a specific feature equals the MAX_FEATURE_VALUE over a specific range;

GoTo: [jfs](#jforests)		


## What is Byte ?

- one byte is essentially a character and byte array is a string  
- One may convert from a byte to string and vice versa using Charset.UTF_8  
- Saving byte array into a [File](https://www.mkyong.com/java/how-to-convert-array-of-bytes-into-file/)

- util/Util
	- short 2 byte, integer 4 bytes, long 8 bytes
	- https://www.tutorialspoint.com/java/lang/float_floattointbits.html
	- https://stackoverflow.com/questions/4485128/how-do-i-convert-long-to-byte-and-back-in-java
	- https://stackoverflow.com/questions/2183240/java-integer-to-byte-array
	- https://javadeveloperzone.com/java-basic/java-convert-long-to-byte-array/
- putInByteBufferInt
	- putInByteBufferBoolean
	- putInByteBufferInt
	- putInByteBufferLong	
	- putInByteBufferShort
	- putInByteBufferDouble
	- putInByteBufferFloat
	- to
- util/UtilByte is introduce to replace util/Util. It specializes in byte manipulation	

GoTo: [jfs](#jforests)		


## What is Byte Array ? 

GoTo: [jfs](#jforests)		


## What is Byte Buffer ? 

- http://www.java2s.com/Book/Java/Examples/Convert_data_to_byte_array_back_and_forth.htm
- https://docs.oracle.com/javase/8/docs/api/index.html?java/nio/ByteBuffer.html


GoTo: [top](#table-of-contents)



## Customization
	
- jfs	
    - apps
        - config        
        - tool
    - ingest <- input
        - types
            - sparse
            - dense  
        - actions
            - cluster
            - compress
            - rank
    - conceal <- dataset
        - ByteSerializableInterface
        - HistogramAbstract
        - numArray
	- util
        - UtlByteArray

     
GoTo: [jfs](#jforests)	


### How to start customization


- compression
	- util 
	    - UtilByteArray : convert from primitive types to the byte array
	- dataset
	    - NumArrayFactory to create byte array for feature
	    - numeric 
	    - ByteSerializable
	- input 
	    - Feature 
	    - FeatureAnalyzer detect FeatureStatistics from RawTxt
	- input 
	    - Raw2BinConverter
	- 
	- config
	    - CfgJf is to capture different statistics
- clustering
	- application
	- input/
	- sample

- ranking
	- input/action/


GoTo: [jfs](#jforests)		


### Bin File Converter Cluster


- BinFileDiscreteCluster has two static methods. 
    - The first static method to convert an input file to binary given a static file
    - The second static method to revert an input file given a statistic file 
- convert
    - in  : raw text file , feature statistics file
    - out : discrete file 
    - load feature statistics file
    - Read each line from the input raw file
- revert
    - in : 
    - out : 
    - 


### What is a custom Dataset package?

The development of a custom dataset package starts from 

- ByteSerializable - ByteSerializableInterface
- dataset/numeric
    - NumArr is an abstract class for different NumArr classes
    - NumArrFactory is factory for different NumArr classes
    - NumArr classes includes NumArrInt, NumArrShort, and NumArrLong
- Feature
- HistogramAbstract
- DatasetClustering
- DatasetRanking


GoTo: [jfs](#jforests)	

	
### What is a custom Input package?


Input Package deals with the extraction of raw text into a data structure that is appropriate for different actions; such as compression, clustering, and ranking operation.

The input type can be either a sparse or dense format

- SparseTextFileReader - 
- SparseTextFileLine   - 

The input/features deal with specific feature structure


The input action can be grouped into two different purposes, i.e., Cluster and Ranker

- cluster 
	- BinFileConverterCluster    : convert from raw into binary
	- BinFileDiscretizerCluster  : discretizing a raw feature before generate the bin file
	- BinFileGeneratorCluster : BinFileEncoderCluster & BinFileDecoderCluster
	- BinFileReaderCluster
	- BinFileWriterCluster
- Ranker
	- BinFileConverterRanker
	- BinFileDiscretizerRanker
	- BinFileGeneratorRanker
	- BinFileReaderRanker
	- BinFileWriterRanker
 

GoTo: [jfs](#jforests)	


### Feature Dataset Sample Prediction Configuration

- Feature    - Aspect
- Dataset    - Evidence
- Sample     - Specimen
- Prediction - Forecast

Configuration
- ConfigHolder :
- 

GoTo: [jfs](#jforests)	


## Timeline

- FeatureAnalyzer
- CfgTool captures different properties for compare, cluster and config
    - 
- CfgCas  captures 
    - Should a common analysis structure be available to capture different aspects of a runtime 
- BinFileDiscretizeCluster in jf/input/action/
- BinFileDiscretizeClusterTst 
- FeatureAnalyzerTst
- BinFileDiscreteCluster has two static methods. 
    - The first static method to convert an input file to binary given a static file
    - The second static method to revert an input file given a statistic file 
    - The third static method is to verify the original feature value with the discrete file
- **BinFileConverterCluster**  & **Raw2BinConverter**
    - FeatureAnalyzer and FeatureDiscrete to generate byte representation
    - BinFileDiscretizer to discretize 
    - BinFileGenerator to convert
    - BinFileIOWriterCluster : to save the input feature in a binary representation
    - BinFileIOReader : to load into dataset object  
- **BinFileIOWriterCluster    
    - Construct the object using the name of the output file, feature array and target array.
    - The constructor initializes a BufferedOutputStream to write the content
    - The constructor keep the feature array and the target array for writing
    - The write method includes three steps to writeHeader, writeContent, and the close method.
    - The writeHeader method
    - The close method close the BufferedOutputStream
- jf8/j8a.bytes/src/test/java/d/pr/util/IrisData.java
    - convert iris dataset into a sparse format 
    - Some heuristics are introduced for the query id
- d/pr/jf/input/feature/FeatureAnalyzerTry.java
    - uses iris dataset instead of sample-rank-data  
- Aspect AspectListBean
- GBeans and GBeans Util
- [todo] GBeanUtil:AspectBeanDeserializer deserializing AspectBean based on bins type 
    - FeatureAnalyzerTry     
- 

GoTo: [jfs](#jforests)	

## ToDo

- Package renaming :  
  - ingest > input &  
  - dataset > compress & 
  - dataset > conceal 
- NumArrShort/get returns an int instead of a short. Why?
- getSizeInBit and getSizeInByte is more readable than getSizePerItem
- http://www.java67.com/

- online learning
- structured learning
- recommendation learning
- incremental svd
- DataInputStream and DataOutputStream is able to read/write bytearray

GoTo: [jfs](#jforests)	

## Template

GoTo: [jfs](#jforests)
 




- dataset package handle _byte array_, _Feature_ and _Dataset_



- dataset/ByteSerializable interface 
	- is being used by NumericArr and Dataset
	- contains **getSizeInBytes**,
		- loadFromByteArray( byte[] inArr,int offset) : init the NumArr from byte [] inArr  
		- toByteArray(byte [] outArr, int offset) : copy from the NumArr into byte [] outArr
- dataset/NumArr has a field of name length along with the associated get and set methods
	- The class also inherits from ByteSerializable, so it has the method loadFromByteArray, getSizeInBytes, and toByteArray
	- The class also additional method of get and set value with the argument of index
- dataset/NumArrByte extends NumArr, which is an abstract class, Thus, NumArrByte has to implement a bunch of methods	
	- The constructor is  public NumArrByte(int length)
	- It has a data field with the type of byte
	- It implements 
		- loadFromByteArray, getSizeInBytes, and toByteArray
		- get and set values 
		- sizeOfItems in byte
- dataset/Dataset contains
	- Feature array
	- target array
	- numInstances
	- numFeatures
	- uri : This uri helps preventing reloading of the same dataset
	- needsInitialization boolean
- dataset/Feature 
	- it implements ByteSerializable interface
	- it has a bin field of type NumericArray; which also implement ByteSerializable
- dataset/Dataset has methods
	- getFeatureValue
	- getOriginalFeatureValue	
- dataset/Feature implement ByteSerializable
	- getSizeInBytes
		- int size = bins.getSizeInBytes();
		- size += 4 + upperBounds.length * 4;
			- 4 bytes for keeping the size of the upperBounds array and 
			- then 4 bytes for each array element
		- size += 2 + (name != null ? name.length() : 0); 
		// 1 byte for name length and then the number of characters
		- size += 8 + 8 + 8 + 1; 		
			// min, max, factor, onLogScale
	- toByteArray(byte[] arr, int offset)
		- offset = bins.toByteArray(arr, offset);
		- offset = Util.putIntArrayInByteArray(upperBounds, arr, offset);
		- offset = Util.putStringInByteArray(name, arr, offset);
		- offset = Util.putDoubleInByteArray(min, arr, offset);
		- offset = Util.putDoubleInByteArray(max, arr, offset);
		- offset = Util.putDoubleInByteArray(factor, arr, offset);
		- offset = Util.putBooleanInByteArray(onLogScale, arr, offset);
		- return offset;
		



- util/UtlByteArray1
	- setBoolean
	- getBoolean
- util/UtilByteArray1Try
	- t_Boolean
- Why ByteBuffer class doesn't provide method to read write boolean data type, is there any workaround?
	- Boolean is a 1-bit datatype. ByteBuffer works with bytes. You'll have to decide yourself how you'll represent a boolean as a byte (such as 0 for false and 1 for true, or 0 for false and non-zero for true).
- util/utlByteArray3
	
	

