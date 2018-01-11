
from optparse import OptionParser


if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option("-t", "--train", action="store", type="string", dest="train_file")
    parser.add_option("-v", "--validation", action="store_true", dest="validate")
    parser.add_option("-p", "--predict", action="store", type="string", dest="predict_file")
    
    options, args = parser.parse_args()
    print options.train_file
    