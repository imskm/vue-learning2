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
							<tr>
								<td><a href="/candidate/show.html">1</a></td>
								<td><img src="/assets/img/59.jpg" alt="" class="avatar-small-rounded"></td>
								<td>Ritu Kumar</td>
								<td>Kankinara</td>
								<td>9331234567</td>
								<td>test001@gnail.com</td>
								<td>Nov 7, 2020</td>
							</tr>
							<tr>
								<td>2</td>
								<td><img src="/assets/img/59.jpg" alt="" class="avatar-small-rounded"></td>
								<td>Ritu Kumar</td>
								<td>Kankinara</td>
								<td>9331234567</td>
								<td>test001@gnail.com</td>
								<td>Nov 7, 2020</td>
							</tr>
							<tr>
								<td>3</td>
								<td><img src="/assets/img/59.jpg" alt="" class="avatar-small-rounded"></td>
								<td>Ritu Kumar</td>
								<td>Kankinara</td>
								<td>9331234567</td>
								<td>test001@gnail.com</td>
								<td>Nov 7, 2020</td>
							</tr>
							<tr>
								<td>4</td>
								<td><img src="/assets/img/59.jpg" alt="" class="avatar-small-rounded"></td>
								<td>Ritu Kumar</td>
								<td>Kankinara</td>
								<td>9331234567</td>
								<td>test001@gnail.com</td>
								<td>Nov 7, 2020</td>
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