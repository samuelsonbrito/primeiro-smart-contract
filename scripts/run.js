const main = async () => {

    const [owner, randomPerson] = await hre.ethers.getSigners();

    const tchauContractFactory = await hre.ethers.getContractFactory("TchauPortal");

    const tchauContract = await tchauContractFactory.deploy();
    await tchauContract.deployed();

    console.log("Contract deployed to:", tchauContract.address);
    console.log("Contract deployed by:", owner.address);

    let tchauCount;
    tchauCount = await tchauContract.getTotalTchauzinhos();

    let tchauTxn = await tchauContract.connect(randomPerson).tchau();
    await tchauTxn.wait();

    tchauCount = await tchauContract.getTotalTchauzinhos();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();