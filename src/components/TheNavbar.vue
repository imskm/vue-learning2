<template>

	<div class="navbar navbar-dark">
	  <div class="container fl-between">
	    <div class="navbar-on-sm">
	      <div class="navbar-logo bg-transparent">
	        <img src="/assets/img/logo.png" alt="">
	      </div>
	      <div id="navbar-toggler" class="navbar-toggler">
	        <span class="sticks"></span>
	      </div>
	    </div>

	  <ul id="navmenu" class="navbar-menu">
	    <li><a class="navbar-item" href="/">HOME</a></li>
	    <li><a class="navbar-item" href="/admin/dashboard.html">DASHBOARD</a></li>
	    <li>
	    	<router-link class="navbar-item active" :to="{name: 'candidate.list'}">CANDIDATES</router-link>
	    </li>
	    <li><a class="navbar-item" href="/agent/index.html">AGENTS</a></li>
	    <li><a class="navbar-item" href="/candidate/message.html">MESSAGE</a></li>
	    <li><a class="navbar-item" href="/admin/settings.html">Settings</a></li>
	  </ul>
	  </div>
	</div>
</template>
