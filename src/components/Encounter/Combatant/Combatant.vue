<template>
  <div class="container">
    <div class="content">
      <v-container class="content-container">
        <v-menu min-width="10em">
          <template v-slot:activator="{ on }">
            <v-layout row v-on="on">
              <v-flex xs1 class="job-container" :style="jobContainerStyle">
                <div
                  class="job-icon"
                  :style="jobIconStyle"
                  v-html="jobIcon"
                  v-bind:class="{ blur: blurIcons }"
                ></div>
              </v-flex>
              <v-flex class="info-container">
                <v-layout column>
                  <v-flex class="left-info" v-bind:class="{ blur: blurNames }">
                    {{ combatant.name }}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex class="info-container">
                <v-layout column class="right-info">
                  <v-flex>
                    {{ dps }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </template>
          <v-list
            class="combatant-details-style"
            :style="combatantDetailsStyle"
          >
            <v-list-item
              class="combatant-details-item"
              v-for="(combatantDetailItem, i) in combatantDetailsItems"
              :key="i"
            >
              <v-list-item-title :style="combatantDetailsItemStyle">
                <v-row class="row">
                  <v-col class="column detail-title">
                    {{ combatantDetailItem.title }}
                  </v-col>
                  <v-col class="column detail-value">
                    {{ combatantDetailItem.value }}
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </div>
    <div class="percent-overlay" :style="percentOverlayStyle"></div>
  </div>
</template>

<script>
import { getJobIcon } from "../../../lib/icons";

export default {
  name: "Combatant",
  props: ["combatant"],
  computed: {
    combatantDetailsItems() {
      return [
        {
          title: this.combatant.name
        },
        {
          title: this.$t("combatant.dmg-pct"),
          value: this.combatant.dmgPct
        },
        {
          title: this.$t("combatant.ch-pct"),
          value: this.combatant.chPct
        },
        {
          title: this.$t("combatant.dh-pct"),
          value: this.combatant.dhPct
        },
        {
          title: this.$t("combatant.cdh-pct"),
          value: this.combatant.cdhPct
        },
        {
          title: this.$t("combatant.heal-pct"),
          value: this.combatant.healPct
        },
        {
          title: this.$t("combatant.over-heal-pct"),
          value: this.combatant.overHealPct
        },
        {
          title: this.$t("combatant.deaths"),
          value: this.combatant.deaths
        }
      ];
    },
    combatantDetailsStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    combatantDetailsItemStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    jobIcon() {
      return getJobIcon(this.combatant.job);
    },
    dmgPct() {
      return this.combatant.dmgPct;
    },
    damage() {
      return this.combatant.damage;
    },
    dps() {
      return this.combatant.dps;
    },
    percentOverlayStyle() {
      return {
        width: this.combatant.percent,
        backgroundColor: this.getBarColor(this.combatant.role),
        display: this.$store.state.settings._percentBar
      };
    },
    blurNames() {
      return this.$store.state.settings.blurNames;
    },
    blurIcons() {
      return this.$store.state.settings.blurIcons;
    },
    jobIconStyle() {
      return {
        minWidth: this.$store.state.settings._iconSize
      };
    },
    jobContainerStyle() {
      return {
        padding: "0 0.4em 0 0",
        maxWidth: "28px",
        display: this.$store.state.settings._jobIconDisplay
      };
    }
  },
  methods: {
    getBarColor(role) {
      if (this.$store.state.settings.percentBarRole) {
        if (role === "DPS") {
          return this.$store.state.settings.percentBarColorDps;
        } else if (role === "HEALER") {
          return this.$store.state.settings.percentBarColorHeal;
        } else if (role === "TANK") {
          return this.$store.state.settings.percentBarColorTank;
        } else {
          return this.$store.state.settings.percentBarColor;
        }
      }
      return this.$store.state.settings.percentBarColor;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  @extend .no-spacing;
  display: grid;
  max-width: none !important;
}
.content,
.percent-overlay {
  grid-area: 1 / 1;
}
.content {
  z-index: 1;
}
.content-container {
  border-bottom: 0.1em solid;
}
.left-info {
  @extend .label;
}
.right-info {
  @extend .label;
  margin: 0 1.4em 0 0;
  text-align: right;
}
.job-container {
  display: flex;
  align-items: center;
  z-index: 1;
}
.job-icon {
  padding-top: 0.4em;
}
.info-container {
  display: flex;
  align-items: center;
}
.blur {
  filter: blur(4px);
}
.combatant-details-style {
  @extend .default-border;
  @extend .no-spacing;
  padding: 0.5em;
  font-size: 0.8rem;
}
.combatant-details-item {
  @extend .no-spacing;
  min-height: 1.8em;
}
.detail-value {
  @extend .align-right;
  margin-right: 1.4em;
}
.v-list-item:first-child {
  font-weight: bold;
}
</style>
