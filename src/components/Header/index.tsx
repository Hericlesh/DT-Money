import { HeaderContainer,HeaderContent,NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';

import { NewTransacionModal } from "../NewTransacionModal";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg}alt="" />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                  </Dialog.Trigger>
                
                <NewTransacionModal/>

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
              
    )
}