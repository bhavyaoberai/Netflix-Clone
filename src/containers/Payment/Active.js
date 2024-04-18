import React from "react";

const Active = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="p-4 text-lg font-bold bg-gray-300">Select a UPI App</h1>
        </div>
        <div>
          <img
            src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
            alt="lock"
            className="w-12 h-12"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          {/* Google Pay Card */}
          <div className="bg-white p-4 hover:bg-gray-300 transition duration-500">
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
              alt="Google Pay"
              className="w-10 h-10"
            />
            <h2 className="text-sm mt-2">Google Pay</h2>
          </div>

          {/* PhonePe Card */}
          <div className="bg-white p-4 mt-4 hover:bg-gray-300 transition duration-500">
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
              alt="PhonePe"
              className="w-10 h-10"
            />
            <h2 className="text-sm mt-2">PhonePe</h2>
          </div>

          {/* Paytm UPI Card */}
          <div className="bg-white p-4 mt-4 hover:bg-gray-300 transition duration-500">
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
              alt="Paytm UPI"
              className="w-10 h-10"
            />
            <h2 className="text-sm mt-2">Paytm UPI</h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:ml-4">
          {/* Scan QR Code Section */}
          <div className="text-center">
            <h1 className="text-lg font-bold">Scan QR code</h1>
            <img
              src="https://www.zoomcar.com/build/a148f34bec5de262d7bb5f6356fa348e.png"
              alt="qr code"
              className="w-48 h-16 mt-4"
            />
            <div className="flex justify-center mt-4">
              {/* Avatars Section */}
              <img
                src="https://www.zoomcar.com/build/b0e4e02f6e16bd9e2a822cfe5348cab8.svg"
                alt="Avatar 1"
                className="w-8 h-8 rounded-full mr-2"
              />
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                alt="Avatar 2"
                className="w-8 h-8 rounded-full mr-2"
              />
              <img
                src="https://www.zoomcar.com/build/3ef19a1071cc8527266cd278b3782406.svg"
                alt="Avatar 3"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;



// import React from "react";
// import {
//   Avatar,
//   Box,
//   Card,
//   CardHeader,
//   Flex,
//   Heading,
//   Wrap,
//   WrapItem,
// } from "@chakra-ui/react";

// import ACTIVE from './Styles/Active.module.css'
// const Active = () => {
//   return (
//     <div className={ACTIVE.activeDiv}>

//       <div className={ACTIVE.firstparent}>
//         <div className={ACTIVE.firstchild}>
//           <div>
//             <h1 className={ACTIVE.h1tag}>Select a UPI App</h1>
          
//           </div>
//           <div>
//             <img
//               src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
//               alt="lock"
//               width="50px"
//               height={"50px"}
//             />
//           </div>
//         </div>
//         <div className={ACTIVE.sidebyside2}>
//           <div className={ACTIVE.sidebyside2_firstchild}>
//             <Card className={ACTIVE.card} color={"black"} marginTop={"10px"}>
//               <CardHeader className={ACTIVE.Cardheader}>
//                 <Flex spacing="4">
//                   <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                     <Avatar
//                       name="UPI"
//                       src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
//                     />

//                     <Box>
//                       <Heading size="sm">Google Pay</Heading>
//                     </Box>
//                   </Flex>
//                 </Flex>
//               </CardHeader>
//             </Card>

//             <Card className={ACTIVE.card} color={"black"} marginTop={"10px"}>
//               <CardHeader>
//                 <Flex spacing="4">
//                   <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                     <Avatar
//                       name="UPI"
//                       src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
//                     />

//                     <Box>
//                       <Heading size="sm">PhonePe</Heading>
//                     </Box>
//                   </Flex>
//                 </Flex>
//               </CardHeader>
//             </Card>

//             <Card className={ACTIVE.card} color={"black"} marginTop={"10px"}>
//               <CardHeader>
//                 <Flex spacing="4">
//                   <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//                     <Avatar
//                       name="UPI"
//                       src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
//                     />

//                     <Box>
//                       <Heading size="sm">Paytm UPI</Heading>
//                     </Box>
//                   </Flex>
//                 </Flex>
//               </CardHeader>
//             </Card>
//           </div>

//           <div className={ACTIVE.sidebyside2_secondchild}>
//             <h1>Scan QR code</h1>
//             <img
//               src="https://www.zoomcar.com/build/a148f34bec5de262d7bb5f6356fa348e.png"
//               alt="qr code"
//               width={"180px"}
//               height={"50px"}
//             />
//             <div>
//               <Wrap>
//                 <WrapItem>
//                   <Avatar
//                     name="Dan Abrahmov"
//                     src="https://www.zoomcar.com/build/b0e4e02f6e16bd9e2a822cfe5348cab8.svg"
//                   />
//                 </WrapItem>
//                 <WrapItem>
//                   <Avatar
//                     name="Kola Tioluwani"
//                     src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
//                   />
//                 </WrapItem>
//                 <WrapItem>
//                   <Avatar
//                     name="Kent Dodds"
//                     src="https://www.zoomcar.com/build/3ef19a1071cc8527266cd278b3782406.svg"
//                   />
//                 </WrapItem>
//               </Wrap>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Active;