import { writable } from 'svelte/store';
export const activeUser = writable({ initialLoad: true });
export const loadingString = writable('Initializing');
export const dataLoaded = writable(false);
export const modal = writable(null);
export const loadingPercent = writable(0);
export const isDataLoading = writable(false);
export const isBackRequired = writable(false);

//misc
export const inventoryOpen = writable(false); //GP Inventory
