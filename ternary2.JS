// Normal Coder
function canVoteV1(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  // Good coder
  function canVoteV2(age) {
    if (age >= 18) return true;
    return false;
  }
  
  // Better coder
  function canVoteV3(age) {
    return age >= 18 ? true : false;
  }
  
  // Best coder
  function canVoteV4(age) {
    return age >= 18;
  }
  
  // Amazing coder
  const canVoteV5 = (age) => age >= 18;
  