import { createApp } from "vue";
import { GmWindow } from "../global";
import { createEl, createStyle } from "../lib/dom";
import { _GM_info } from "../lib/GM";
import { log } from "../log";
import { getRule } from "../router/download";
import { getUI } from "../router/ui";
import { iconJump, iconSetting, iconStart0, iconStart1 } from "../setting";
import buttonHtml from "./button.html";
import buttonCss from "./button.less";
import { vm as settingVM } from "./setting";

export const style = createStyle(buttonCss, "button-div-style");
export const el = createEl('<div id="nd-button"></div>');
export const vm = createApp({
  data() {
    return {
      imgStart: iconStart0,
      imgSetting: iconSetting,
      isSettingSeen: _GM_info.scriptHandler !== "Greasemonkey",
      imgJump: iconJump,
      uiObj: {},
    };
  },
  methods: {
    startButtonClick() {
      if ((window as GmWindow).downloading) {
        alert("正在下载中，请耐心等待……");
        return;
      }

      const self = this;
      self.imgStart = iconStart1;

      async function run() {
        const ruleClass = await getRule();
        await ruleClass.run();
      }

      run()
        .then(() => {
          self.imgStart = iconStart0;
        })
        .catch((error) => log.error(error));
    },
    settingButtonClick() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      settingVM.openSetting();
    },
    jumpButtonClick() {
      this.uiObj.jumpFunction();
    },
  },
  mounted() {
    Object.assign(this.uiObj, getUI()());
  },
  template: buttonHtml,
});
