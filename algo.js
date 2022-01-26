let testData = "10000110001010";
let count = 0;
let occurenceList = [];

const getHighestOccurence = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      let currentIndexElement = data[i];
      let prevIndexElement = data[i - 1];
      console.log(prevIndexElement, currentIndexElement);
      if (prevIndexElement == 1 && currentIndexElement == 0) {
        count += 1;
      } else {
      }
    }
  }
  console.log(count);
};

getHighestOccurence(testData);
