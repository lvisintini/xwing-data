var DATASET_HEADER_MAP = {
  conditions: "Condition",
  damageDeckCore: "DamageDeckCore",
  damageDeckCoreTfa: "DamageDeckCoreTFA",
  damageDeckRebelTransport: "DamageDeckRebelTransport",
  pilots: "Pilot",
  ships: "Ship",
  sources: "Source",
  upgrades: "Upgrade",
};

var KEYWORDS = {
  actions: [
    "Barrel Roll",
    "Boost",
    "Cloak",
    "Coordinate",
    "Evade",
    "Focus",
    "Jam",
    "Recover",
    "Reinforce",
    "Rotate Arc",
    "SLAM",
    "Target Lock"
  ],
  maneuvers: [
    "Bank Left",
    "Bank Right",
    "Koiogran Turn",
    "Reverse Bank Left",
    "Reverse Bank Right",
    "Reverse Straight",
    "Segnor's Loop Left",
    "Segnor's Loop Right",
    "Stop",
    "Straight",
    "Tallon Roll Left",
    "Tallon Roll Right",
    "Turn Left",
    "Turn Right"
  ],
  slots: [
    "Astromech",
    "Bomb",
    "Cannon",
    "Cargo",
    "Crew",
    "Elite",
    "Hardpoint",
    "Illicit",
    "Missile",
    "Salvaged Astromech",
    "System",
    "Team",
    "Tech",
    "Torpedo",
    "Turret"
  ],
  symbols: [
    "Critical Hit",
    "Evade",
    "Focus",
    "Hit"
  ]
};

KEYWORDS.all = [].concat(
  KEYWORDS.actions,
  KEYWORDS.maneuvers,
  KEYWORDS.slots,
  KEYWORDS.symbols
);

module.exports = {
  KEYWORDS: KEYWORDS,
  DATASET_HEADER_MAP: DATASET_HEADER_MAP,
};
