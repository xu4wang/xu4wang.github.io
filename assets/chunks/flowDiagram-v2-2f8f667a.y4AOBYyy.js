import { p as parser$1, f as flowDb } from "./flowDb-170db09d.jgabLGq_.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-b966c4ae.JMwkIRWB.js";
import { aq as setConfig } from "../app.6a86UdOJ.js";
import "./layout.MBcDvY-1.js";
import "./index-67a42d7d.JzfOYroU.js";
import "./edges-80f1ebb6.uvTk0g7o.js";
import "./createText-aebacdfe.k7_2gsQf.js";
import "./line.reZexJtR.js";
import "./array.7YoLFSEf.js";
import "./path.uVd5yEuS.js";
import "./framework.XmXKRmb4.js";
import "./theme.Lyvw_tRM.js";
import "./Page.wbKkhMJQ.js";
const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
