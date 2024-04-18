import React, { useState } from "react";
import Active from "./Active";
import Wallet from "./Wallet";
import Banking from "./Banking";
import Credit from "./Credit";

const Payment = () => {
  const [pageTrue, setpageTrue] = useState("upi");

  const handleChange = (value) => {
    setpageTrue(value);
  };

  return (
    <div className="mx-auto w-70">
      <div id="first" className="flex flex-wrap justify-between">
        <div
          className="w-full sm:w-48 md:w-48 lg:w-48 xl:w-48 mb-4 cursor-pointer p-4 bg-white text-black rounded-md shadow"
          onClick={() => handleChange("upi")}
        >
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
            alt="UPI"
            className="rounded-full w-12 h-12 mx-auto mb-2"
          />
          <p className="text-center text-sm md:text-md lg:text-lg">UPI</p>
        </div>

        <div
          className="w-full sm:w-48 md:w-48 lg:w-48 xl:w-48 mb-4 cursor-pointer p-4 bg-white text-black rounded-md shadow"
          onClick={() => handleChange("card")}
        >
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
            alt="Card"
            className="rounded-full w-12 h-12 mx-auto mb-2"
          />
          <p className="text-center text-sm md:text-md lg:text-lg">
            Credit/ Debit/ ATM Card
          </p>
        </div>

        {/* Repeat similar structure for other options */}

      </div>

      <div>
        {pageTrue === "upi" ? (
          <Active />
        ) : pageTrue === "card" ? (
          <Credit />
        ) : pageTrue === "netbank" ? (
          <Banking />
        ) : pageTrue === "wallet" ? (
          <Wallet />
        ) : null}
      </div>
    </div>
  );
};

export default Payment;





// import React, { useState } from "react";
// import PAYMENT from "./Styles/Payment.css";
// import { Avatar, Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";
// import Active from "./Active";
// import Wallet from "./Wallet";
// import Banking from "./Banking";
// import Credit from "./Credit";
// import "./Styles/Payment.module.css";


// // let DataObj = JSON.parse(localStorage.getItem("userId"));

// const Payment = (data) => {
//   const [pageTrue, setpageTrue] = useState("upi");

//   const handleChange = (value) => {
//     setpageTrue(value);
//   };

//   return (
//     <div className={PAYMENT.payDiv}>
//       <div id="first">
//         <div>
//           <h1 className={PAYMENT.tagH1}>PAYMENT OPTIONS</h1>
//           <Card
          
//             maxW="md"
//             bg={"white"}
//             color={"black"}
//             marginTop={"10px"}
//             className={PAYMENT.card}
//             onClick={() => handleChange("upi")}
//           >
//             <CardHeader>
//               <Flex spacing="4">
//                 <Flex flex="1" gap="4" alignItems="center">
//                   <Avatar
//                     name="UPI"
//                     className={PAYMENT.Avatarmain}
//                     src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
//                   />

//                   <Box>
//                     <Heading
//                       className={PAYMENT.Headings}
//                       fontSize={["sm", "md", "lg"]}
//                     >
//                       UPI
//                     </Heading>
                  
//                   </Box>
//                 </Flex>
//               </Flex>
//             </CardHeader>
//           </Card>

//           <Card
//             maxW="md"
//             bg={"white"}
//             color={"black"}
//             marginTop={"10px"}
//             className={PAYMENT.card}
//             onClick={() => handleChange("card")}
//           >
//             <CardHeader>
//               <Flex spacing="4">
//                 <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     className={PAYMENT.Avatarmain}
//                     name="UPI"
//                     src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
//                   />

//                   <Box>
//                     <Heading
//                       className={PAYMENT.Headings}
//                       fontSize={["sm", "md", "lg"]}
//                     >
//                       Credit/ Debit/ ATM Card
//                     </Heading>
             
//                   </Box>
//                 </Flex>
//               </Flex>
//             </CardHeader>
//           </Card>

//           <Card
//             maxW="md"
//             bg={"white"}
//             color={"black"}
//             marginTop={"10px"}
//             className={PAYMENT.card}
//             onClick={() => handleChange("wallet")}
//           >
//             <CardHeader>
//               <Flex spacing="4">
//                 <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     className={PAYMENT.Avatarmain}
//                     name="Mobile Wallet"
//                     src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
//                   />

//                   <Box>
//                     <Heading
//                       className={PAYMENT.Headings}
//                       fontSize={["sm", "md", "lg"]}
//                     >
//                       Mobile Wallet
//                     </Heading>
               
//                   </Box>
//                 </Flex>
//               </Flex>
//             </CardHeader>
//           </Card>

//           <Card
//             maxW="md"
//             bg={"white"}
//             color={"black"}
//             marginTop={"10px"}
//             className={PAYMENT.card}
//             onClick={() => handleChange("netbank")}
//           >
//             <CardHeader>
//               <Flex spacing="4">
//                 <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     name="Net Banking"
//                     className={PAYMENT.Avatarmain}
//                     src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
//                   />

//                   <Box>
//                     <Heading
//                       className={PAYMENT.Headings}
//                       fontSize={["sm", "md", "lg"]}
//                     >
//                       Net Banking
//                     </Heading>
//                   </Box>
//                 </Flex>
//               </Flex>
//             </CardHeader>
//           </Card>
//         </div>

    

//         <div>
//           {pageTrue === "upi" ? (
//             <Active />
//           ) : pageTrue === "card" ? (
//             <Credit />
//           ) : pageTrue === "netbank" ? (
//             <Banking />
//           ) : pageTrue === "wallet" ? (
//             <Wallet />
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;