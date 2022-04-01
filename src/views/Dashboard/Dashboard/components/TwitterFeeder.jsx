import React, { useRef, useState } from "react";
import { Timeline } from "react-twitter-widgets";
import {
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import Card from "#components/Card/Card";

function TwitterFeeder() {
  const [twitterId, setTwitterId] = useState(
    localStorage.getItem("twitterId") ? localStorage.getItem("twitterId") : ""
  );
  const [newTwitterId, setNewTwitterId] = useState(twitterId);
  const modalSizes = ["xs", "sm", "md", "lg", "xl", "full"];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const twitterIdRef = useRef();

  const onChange = (event) => {
    setNewTwitterId(event.target.value);
  };

  const onConnect = () => {
    console.log("???: ", newTwitterId);
    localStorage.setItem("twitterId", newTwitterId);
    setTwitterId(newTwitterId);
    onClose();
  };

  const onDisconnect = () => {
    localStorage.setItem("twitterId", "");
    setTwitterId("");
  };

  return (
    <Card p={2} borderRadius="lg">
      <Flex
        p={2}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          bg="transparent"
          onClick={onOpen}
          my={{ sm: "1.5rem", lg: "0px" }}
        >
          Connect
        </Button>
        <Button
          bg="transparent"
          onClick={onDisconnect}
          my={{ sm: "1.5rem", lg: "0px" }}
        >
          Disconnect
        </Button>
      </Flex>
      {!!`twitterId`.length && (
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: twitterId,
          }}
          options={{
            height: "480",
          }}
        />
      )}
      <Modal
        size="sm"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Input the twitter Id</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormLabel>Twitter Id</FormLabel>
            <InputGroup>
              <InputLeftAddon children="@" />
              <Input
                value={newTwitterId}
                onChange={onChange}
                placeholder="elonmusk"
              />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onConnect} colorScheme="blue" mr={3}>
              Connect
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

export default TwitterFeeder;
