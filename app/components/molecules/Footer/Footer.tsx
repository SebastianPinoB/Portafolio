import { Flex } from "antd";
import FooterNav from "~/components/atoms/Footer/FooterNav";
import FooterPoliticasTerminos from "~/components/atoms/Footer/FooterPoliticasTerminos";
import FooterCopy from "~/components/atoms/Footer/FooterCopy";

const Footer = () =>{
   return(
      <Flex vertical align="center"
      style={{
         textAlign: "center",
         marginTop: "100px", // separación superior
         gap:"30px"
      }}>
         <FooterPoliticasTerminos />
         <FooterNav />
         <FooterCopy />
      </Flex>
   )
}

export default Footer;