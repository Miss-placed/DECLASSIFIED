import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildLlmsText,
  buildLlmsFullText,
  type LlmsManifestMap,
} from './generate-llms';

const manifests: LlmsManifestMap = {
  intel: {
    urls: [
      '/intel/black-ops-6/',
      '/intel/black-ops-6/citadelle-des-morts/',
      '/intel/black-ops-6/citadelle-des-morts/the-bastard-sword-bo6s1car1/',
      '/intel/black-ops-cold-war/die-maschine/',
      '/intel/black-ops-cold-war/die-maschine/the-incident-rs0au1/',
    ],
  },
  operations: {
    urls: [
      '/operations/black-ops-6/',
      '/quests/black-ops-6/citadelle-des-morts/',
      '/eggs/black-ops-6/citadelle-des-morts/',
    ],
  },
};

test('buildLlmsText emits site summary, route patterns, and key map hubs', () => {
  const content = buildLlmsText(manifests);

  assert.match(content, /^# DECLASSIFIED/m);
  assert.match(content, /> .*Call of Duty Zombies/i);
  assert.match(content, /\/intel\/\{game\}\/\{map\}\//);
  assert.match(content, /\/intel\/\{game\}\/\{map\}\/\{item-slug\}\//);
  assert.match(content, /\/quests\/\{game\}\/\{map\}\//);
  assert.match(content, /\/eggs\/\{game\}\/\{map\}\//);
  assert.match(content, /https:\/\/declassified\.app\/intel\/black-ops-6\/citadelle-des-morts\//);
  assert.match(content, /https:\/\/declassified\.app\/quests\/black-ops-6\/citadelle-des-morts\//);
  assert.match(content, /https:\/\/declassified\.app\/eggs\/black-ops-6\/citadelle-des-morts\//);
  assert.match(content, /https:\/\/declassified\.app\/llms-full\.txt/);
  assert.match(content, /Only `\/intel\/` currently exposes item-level deep links/i);
  assert.doesNotMatch(content, /\/eggs\/\{game\}\/\{map\}\/\{item-slug\}\//);
});

test('buildLlmsFullText includes indexed detail URLs for deep linking', () => {
  const content = buildLlmsFullText(manifests);

  assert.match(content, /^# DECLASSIFIED Full Index/m);
  assert.match(content, /\[The Bastard Sword\]\(https:\/\/declassified\.app\/intel\/black-ops-6\/citadelle-des-morts\/the-bastard-sword-bo6s1car1\/\): Intel entry for The Bastard Sword on Citadelle Des Morts\./);
  assert.match(content, /\[The Incident\]\(https:\/\/declassified\.app\/intel\/black-ops-cold-war\/die-maschine\/the-incident-rs0au1\/\): Intel entry for The Incident on Die Maschine\./);
  assert.match(content, /\[Citadelle Des Morts Main Quest\]\(https:\/\/declassified\.app\/quests\/black-ops-6\/citadelle-des-morts\/\): Main quest walkthrough for Citadelle Des Morts\./);
  assert.match(content, /\[Citadelle Des Morts Side Eggs\]\(https:\/\/declassified\.app\/eggs\/black-ops-6\/citadelle-des-morts\/\): Side egg guide for Citadelle Des Morts\./);
  assert.match(content, /\[Black Ops 6 Operations\]\(https:\/\/declassified\.app\/operations\/black-ops-6\/\): Game hub that routes players into main quest walkthroughs and side egg guides, depending on whether they want core progression or optional rewards and secrets\./);
  assert.match(content, /https:\/\/declassified\.app\/intel\/black-ops-6\/citadelle-des-morts\/the-bastard-sword-bo6s1car1\//);
  assert.match(content, /https:\/\/declassified\.app\/intel\/black-ops-cold-war\/die-maschine\/the-incident-rs0au1\//);
  assert.match(content, /https:\/\/declassified\.app\/operations\/black-ops-6\//);
});