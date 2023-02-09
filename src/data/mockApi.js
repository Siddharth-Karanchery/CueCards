import { newLine, indent1, indent2 } from "./constants";
import { Section0 } from "./SectionData/Section0";
import { Section1 } from "./SectionData/Section1";
import { Section10 } from "./SectionData/Section10";
import { Section11 } from "./SectionData/Section11";
import { Section12 } from "./SectionData/Section12";
import { Section13 } from "./SectionData/Section13";
import { Section14 } from "./SectionData/Section14";
import { Section15 } from "./SectionData/Section15";
import { Section16 } from "./SectionData/Section16";
import { Section17 } from "./SectionData/Section17";
import { Section18 } from "./SectionData/Section18";
import { Section19 } from "./SectionData/Section19";
import { Section2 } from "./SectionData/Section2";
import { Section20 } from "./SectionData/Section20";
import { Section21 } from "./SectionData/Section21";
import { Section22 } from "./SectionData/Section22";
import { Section23 } from "./SectionData/Section23";
import { Section24 } from "./SectionData/Section24";
import { Section25 } from "./SectionData/Section25";
import { Section26 } from "./SectionData/Section26";
import { Section27 } from "./SectionData/Section27";
import { Section28 } from "./SectionData/Section28";
import { Section29 } from "./SectionData/Section29";
import { Section3 } from "./SectionData/Section3";
import { Section30 } from "./SectionData/Section30";
import { Section31 } from "./SectionData/Section31";
import { Section32 } from "./SectionData/Section32";
import { Section33 } from "./SectionData/Section33";
import { Section34 } from "./SectionData/Section34";
import { Section35 } from "./SectionData/Section35";
import { Section36 } from "./SectionData/Section36";
import { Section4 } from "./SectionData/Section4";
import { Section5 } from "./SectionData/Section5";
import { Section6 } from "./SectionData/Section6";
import { Section7 } from "./SectionData/Section7";
import { Section8 } from "./SectionData/Section8";
import { Section9 } from "./SectionData/Section9";

export const overview = [
  {
    chapterNum: "1",
    chapterTitle: "Preliminary",
    sections: [
      {
        sectionNum: 1,
        sectionTitle: "Short title, extent and commencement.",
      },
      {
        sectionNum: 2,
        sectionTitle: "Definitions and interpretation.",
      },
    ],
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    sections: [
      {
        sectionNum: 3,
        sectionTitle: " Appointment of Registrar and other officers",
      },
      {
        sectionNum: 4,
        sectionTitle: " Power of Registrar to withdraw or transfer cases, etc",
      },
      {
        sectionNum: 5,
        sectionTitle: " Trade Marks Registry and offices thereof",
      },
      { sectionNum: 6, sectionTitle: " The Register of Trade Marks" },
      { sectionNum: 7, sectionTitle: " Classification of goods and services" },
      { sectionNum: 8, sectionTitle: " Publication of alphabetical index" },
      {
        sectionNum: 9,
        sectionTitle: " Absolute grounds for refusal of registration",
      },
      { sectionNum: 10, sectionTitle: " Limitation as to colour" },
      {
        sectionNum: 11,
        sectionTitle: " Relative grounds for refusal of registration",
      },
      {
        sectionNum: 12,
        sectionTitle: " Registration in the case of honest concurrent use, etc",
      },
      {
        sectionNum: 13,
        sectionTitle:
          " Prohibition of registration of names of chemical elements or international non-proprietary names",
      },
      {
        sectionNum: 14,
        sectionTitle:
          " Use of names and representations of living persons or persons recently dead",
      },
      {
        sectionNum: 15,
        sectionTitle:
          " Registration of parts of trade marks and of trade marks as a series",
      },
      {
        sectionNum: 16,
        sectionTitle: " Registration of trade marks as associated trade marks",
      },
      {
        sectionNum: 17,
        sectionTitle: " Effect of registration of parts of a mark",
      },
    ],
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    sections: [
      { sectionNum: 18, sectionTitle: " Application for registration" },
      { sectionNum: 19, sectionTitle: " Withdrawal of acceptance" },
      { sectionNum: 20, sectionTitle: " Advertisement of application" },
      { sectionNum: 21, sectionTitle: " Opposition to registration" },
      { sectionNum: 22, sectionTitle: " Correction and amendment" },
      { sectionNum: 23, sectionTitle: " Registration" },
      { sectionNum: 24, sectionTitle: " Jointly owned trade marks" },
      {
        sectionNum: 25,
        sectionTitle:
          " Duration, renewal, removal and restoration of registration",
      },
      {
        sectionNum: 26,
        sectionTitle:
          " Effect of removal from register for failure to pay fee for renewal",
      },
    ],
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    sections: [
      {
        sectionNum: 27,
        sectionTitle: " No action for infringement of unregistered trade mark",
      },
      { sectionNum: 28, sectionTitle: " Rights conferred by registration" },
      {
        sectionNum: 29,
        sectionTitle: " Infringement of registered trade marks",
      },
      {
        sectionNum: 30,
        sectionTitle: " Limits on effect of registered trade mark",
      },
      {
        sectionNum: 31,
        sectionTitle: " Registration to be prima facie evidence of validity",
      },
      {
        sectionNum: 32,
        sectionTitle:
          " Protection of registration on ground of distinctiveness in certain cases",
      },
      { sectionNum: 33, sectionTitle: " Effect of acquiescence" },
      { sectionNum: 34, sectionTitle: " Saving for vested rights" },
      {
        sectionNum: 35,
        sectionTitle:
          " Saving for use of name, address or description of goods or services",
      },
      {
        sectionNum: 36,
        sectionTitle:
          " Saving for words used as name or description of an article or substance or service",
      },
    ],
  },
];

// {
//   chapterNum: ,
//   chapterTitle: "",
//   sections: [
//     { sectionNum: , sectionTitle: "" },

//   ],
// },
//////////////////////////////////////////////////////////////////////////////////////////////////////

export const sectionData = [
  {
    chapterNum: "1",
    chapterTitle: "Preliminary",
    sectionNum: 1,
    sectionTitle: "Short title, extent and commencement.",
    points: Section1,
  },
  {
    chapterNum: "1",
    chapterTitle: "Preliminary",
    sectionNum: 2,
    sectionTitle: "Definitions and interpretation.",
    points: Section2,
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    sectionNum: 3,
    sectionTitle: "Appointment of Registrar and other officers.",
    points: Section3,
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section4,
    sectionNum: 4,
    sectionTitle: " Power of Registrar to withdraw or transfer cases, etc",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section5,
    sectionNum: 5,
    sectionTitle: " Trade Marks Registry and offices thereof",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section6,
    sectionNum: 6,
    sectionTitle: " The Register of Trade Marks",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section7,
    sectionNum: 7,
    sectionTitle: " Classification of goods and services",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section8,
    sectionNum: 8,
    sectionTitle: " Publication of alphabetical index",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section9,
    sectionNum: 9,
    sectionTitle: " Absolute grounds for refusal of registration",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section10,
    sectionNum: 10,
    sectionTitle: " Limitation as to colour",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section11,
    sectionNum: 11,
    sectionTitle: " Relative grounds for refusal of registration",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section12,
    sectionNum: 12,
    sectionTitle: " Registration in the case of honest concurrent use, etc",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section13,
    sectionNum: 13,
    sectionTitle:
      " Prohibition of registration of names of chemical elements or international non-proprietary names",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section14,
    sectionNum: 14,
    sectionTitle:
      " Use of names and representations of living persons or persons recently dead",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section15,
    sectionNum: 15,
    sectionTitle:
      " Registration of parts of trade marks and of trade marks as a series",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section16,
    sectionNum: 16,
    sectionTitle: " Registration of trade marks as associated trade marks",
  },
  {
    chapterNum: "2",
    chapterTitle: "The Register And Conditions For Registration",
    points: Section17,
    sectionNum: 17,
    sectionTitle: " Effect of registration of parts of a mark",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section18,
    sectionNum: 18,
    sectionTitle: " Application for registration",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section19,
    sectionNum: 19,
    sectionTitle: " Withdrawal of acceptance",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section20,
    sectionNum: 20,
    sectionTitle: " Advertisement of application",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section21,
    sectionNum: 21,
    sectionTitle: " Opposition to registration",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section22,
    sectionNum: 22,
    sectionTitle: " Correction and amendment",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section23,
    sectionNum: 23,
    sectionTitle: " Registration",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section24,
    sectionNum: 24,
    sectionTitle: " Jointly owned trade marks",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section25,
    sectionNum: 25,
    sectionTitle: " Duration, renewal, removal and restoration of registration",
  },
  {
    chapterNum: "3",
    chapterTitle: "PROCEDURE FOR AND DURATION OF REGISTRATION",
    points: Section26,
    sectionNum: 26,
    sectionTitle:
      " Effect of removal from register for failure to pay fee for renewal",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section27,
    sectionNum: 27,
    sectionTitle: " No action for infringement of unregistered trade mark",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section28,
    sectionNum: 28,
    sectionTitle: " Rights conferred by registration",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section29,
    sectionNum: 29,
    sectionTitle: " Infringement of registered trade marks",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section30,
    sectionNum: 30,
    sectionTitle: " Limits on effect of registered trade mark",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section31,
    sectionNum: 31,
    sectionTitle: " Registration to be prima facie evidence of validity",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section32,
    sectionNum: 32,
    sectionTitle:
      " Protection of registration on ground of distinctiveness in certain cases",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section33,
    sectionNum: 33,
    sectionTitle: " Effect of acquiescence",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section34,
    sectionNum: 34,
    sectionTitle: " Saving for vested rights",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section35,
    sectionNum: 35,
    sectionTitle:
      " Saving for use of name, address or description of goods or services",
  },
  {
    chapterNum: "4",
    chapterTitle: "EFFECT OF REGISTRATION",
    points: Section36,
    sectionNum: 36,
    sectionTitle:
      " Saving for words used as name or description of an article or substance or service",
  },
];
