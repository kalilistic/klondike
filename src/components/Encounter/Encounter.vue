<template>
  <v-content class="encounter" :style="encounterStyle">
    <Combatant
      v-for="(combatant, index) in combatants"
      v-bind:combatant="combatant"
      v-bind:index="index"
      v-bind:key="index"
    >
    </Combatant>
    <v-menu min-width="10em">
      <template v-slot:activator="{ on }">
        <v-container fluid class="footer" v-on="on">
          <v-row>
            {{ duration }}
            <v-spacer />
            {{ dps }}
          </v-row>
        </v-container>
      </template>
      <v-list class="encounter-details-style" :style="encounterDetailsStyle">
        <v-list-item
          class="encounter-details-item"
          v-for="(encounterDetailItem, i) in encounterDetailsItems"
          :key="i"
        >
          <v-list-item-title :style="encounterDetailsItemStyle">
            <v-row class="row">
              <v-col class="column detail-title">
                {{ encounterDetailItem.title }}
              </v-col>
              <v-col class="column detail-value">
                {{ encounterDetailItem.value }}
              </v-col>
            </v-row>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-content>
</template>

<script>
import Combatant from "./Combatant/Combatant";

export default {
  name: "Encounter",
  components: {
    Combatant
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.getters.inEncounter) {
        next();
      } else {
        next("/");
      }
    });
  },
  data() {
    return {
      encounterDetailsItems: [
        {
          title: this.$t("encounter.encounter")
        },
        {
          title: this.$t("encounter.damage"),
          value: this.$store.state.combatData.encounter.damage
        },
        {
          title: this.$t("encounter.deaths"),
          value: this.$store.state.combatData.encounter.deaths
        }
      ]
    };
  },
  computed: {
    encounterDetailsStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    encounterDetailsItemStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    combatants() {
      return this.$store.state.combatData.combatants;
    },
    duration() {
      return (
        this.$t("encounter.duration") +
        this.$store.state.combatData.encounter.duration
      );
    },
    dps() {
      return (
        this.$t("encounter.dps") + this.$store.state.combatData.encounter.dps
      );
    },
    encounterStyle() {
      return {
        display: this.$store.state.settings._mainDisplay,
        backgroundColor: this.$store.state.settings.backgroundColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
.encounter {
  @extend .default-border;
  border-top: 0;
}
.footer {
  @extend .no-spacing;
  padding: 0.2em 1.5em 0 0.1em;
}
.encounter-details-style {
  @extend .default-border;
  @extend .no-spacing;
  padding: 0.5em;
  font-size: 0.8rem;
  min-width: 15em;
}
.encounter-details-item {
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
