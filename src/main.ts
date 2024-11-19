import './app.css';
import App from './App.svelte';

import { mount } from 'svelte';

const el = document.getElementById('app');

const app = el && mount(App, { target: el });

export default app;
