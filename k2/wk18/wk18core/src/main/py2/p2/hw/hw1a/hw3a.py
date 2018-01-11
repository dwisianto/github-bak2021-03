    
import os
from optparse import OptionParser
import numpy 




if __name__ == "__main__":
    print(" work dir :" + os.getcwd() ) 
    
    # [] 
    parser = OptionParser()
    parser.add_option("-i", "--in", action="store", type="string", dest="file_in")
    parser.add_option("-o", "--out", action="store", type="string", dest="file_out")
    
    options, args = parser.parse_args()
    print options.file_in
    print options.file_out
    
    # [] 
    datTrn = numpy.loadtxt(options.file_in, delimiter=' ')
    print( datTrn[:,0] )
    
    #numpy.loadtxt(fname, dtype, comments, delimiter, converters, skiprows, usecols, unpack, ndmin)
    
            
    print("Bye World")

    