<template>
	<div class="section dashboard-section">
		<div class="container">
			<div class="page-header">
				<div class="row">	
					<div class="col">
						<div class="table-title">
							<h1 class="text-black">Candidates</h1>
						</div>
					</div>
					<div class="col">
						<div class="page-header-right">
							<form action="" method="get">
								<input class="search-box" type="text" name="search" value="" placeholder="Search">
							</form>
							<a href="/candidate/create.html" class="btn btn-danger">Create</a>
						</div>
					</div>
				</div>
			</div>
			<div class="table-container">
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th></th>
							<th>Name</th>
							<th>Place</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Created At</th>
						</tr>
					</thead>
					<tbody>

						<tr v-for="(c, index) in candidates">
							<td><a href="/candidate/show.html">{{ c.id }}</a></td>
							<td><img src="/assets/img/59.jpg" alt="" class="avatar-small-rounded"></td>
							<td>{{ c.name }}</td>
							<td>{{ c.address }}</td>
							<td>{{ c.phone }}</td>
							<td>{{ c.email }}</td>
							<td>{{ c.created_at }}</td>
						</tr>

					</tbody>
					
				</table>
					
			</div>
			<div class="footer-nav">
				<ul class="nav">
					<li class="nav-item">
						<a href="#" class="nav-link">Previous</a>
					</li>
					
					<li class="nav-item">
						<a href="#" class="nav-link">Next </a>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
import staticData from '@/../data.json';

export default {
	data() {
		return {
			candidates: [],
		}
	},

	methods: {
		fetchCandidates() {
			// Call candidates API
			// http://127.0.0.1:8080
			const url = "http://127.0.0.1:8080";

			fetch(url).then((res) => {
				return res.json();
			}).then((data) => {

				this.candidates = data;

			}).catch((err) => {
				// 
			});

			this.candidates = staticData.candidates;
		}
	},

	mounted() {
		this.fetchCandidates();
	},
}
</script>