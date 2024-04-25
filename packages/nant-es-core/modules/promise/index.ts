

class PromiseA  {

  constructor(executor: () => void) {

    console.log(new.target);


  }
}

