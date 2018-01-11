#
# reading from a text file
#

import os

def readFile0(file_loc):
    f = open(file_loc, 'r')
    data = []
    for line in f:
        new_arr = []
        arr = line.split(' #')[0].split()
        score = arr[0]
        q_id = arr[1].split(':')[1]
        new_arr.append(int(score))
        new_arr.append(int(q_id))
        arr = arr[2:]
        for el in arr:
            new_arr.append(float(el.split(':')[1]))
        data.append(new_arr)
    f.close()
    #return numpy.array(data)


def fileRead1(fileLoc):
    f = open(fileLoc)
    data = []
    for line in f:
        print line
    f.close()
    
def fileReadLetor(fileLoc):
    f = open(fileLoc, 'r')
    data = []
    for line in f:
        #print line        
        new_arr = []
        arr = line.split(',')
        score = arr[0]
        q_id = arr[1]
        new_arr.append(int(score))
        new_arr.append(int(q_id))
        arr = arr[2:]
        for el in arr:
            new_arr.append(el)
        data.append(new_arr)
    f.close()
    return data
    


#
if __name__ == "__main__":
    print("hello world")        
    os.chdir('/Users/dsm/DGit/y17bee/w1_cli/d3.phrasal.detect')    
    print("cwd "+ os.getcwd() )
    
    
    #loc_files='/Users/dsm/DGit/y19data/letor4/mq2k8/Fold1'        
    #train_file   = loc_files + '/train.txt'
    #validate     = loc_files + '/train.txt'
    #predict_file = loc_files + '/train.txt'
    aFile='dat/main/py2/p2/hw/hw1a/t1a.txt'      
    fileRead2(aFile)
    
    #numpy.savetxt(fname, X, fmt, delimiter, newline, header, footer, comments)
    #numpy.savetxt(out_trn, get_data(train_file),fmt='%1.3f',delimiter=',' )
    #print out_trn
