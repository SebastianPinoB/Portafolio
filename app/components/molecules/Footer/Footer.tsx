import { Flex } from "antd";
import FooterNav from "~/components/atoms/Footer/FooterNav";
import FooterPoliticasTerminos from "~/components/atoms/Footer/FooterPoliticasTerminos";
import FooterCopy from "~/components/atoms/Footer/FooterCopy";

const Footer = () =>{
   return(
      <Flex>
         <FooterPoliticasTerminos />
         <FooterNav />
         <FooterCopy />
      </Flex>
   )
}

export default Footer;