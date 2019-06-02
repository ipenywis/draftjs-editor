import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faUnderline,
  faItalic,
  faAnchor
} from "@fortawesome/free-solid-svg-icons";

const blockTypes = [
  {
    label: "H1",
    style: "header-one"
  },
  {
    label: "H2",
    style: "header-two"
  },
  {
    label: "H3",
    type: "header-three"
  },
  {
    label: "H4",
    type: "header-four"
  }
];

const inlineStyles = [
  {
    label: "bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  }
];

export { blockTypes, inlineStyles };
