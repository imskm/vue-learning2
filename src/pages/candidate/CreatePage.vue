<template>
		<div class="section dashboard-section">
			<div class="container">
				<div class="page-header">
					<div class="row">	
						<div class="col">
							<div class="page-header-left">
								<h1 class="text-black">Create Candidate</h1>
							</div>
						</div>
						<div class="col">
							<div class="page-header-right">
								<a href="/candidate/index.html" class="btn btn-danger">Back</a>
							</div>
						</div>
					</div>
				</div>
				<form class="drop-shadow" action="">
					<h4 class="text-black mb-30">Applicant&apos;s personal information</h4>
					<div class="row">
						<div class="col">
							<div class="form-controls-row">
								<label for="first_name">Fist Name</label>
								<input id="first_name" type="text" name="first_name" placeholder="First Name">
							</div>
						</div>
						<div class="col">
							<div class="form-controls-row">
								<label for="last_name">Last Name</label>
								<input id="last_name" type="text" name="last_name" placeholder="Last Name">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="form-controls-row">
								<label for="phone">Phone</label>
								<input id="phone" type="text" name="phone" placeholder="Phone">
							</div>
						</div>
						<div class="col">
							<div class="form-controls-row">
								<label for="email">Email</label>
								<input id="email" type="text" name="email" placeholder="Email">
							</div>
						</div>
					</div>
					<div class="form-controls-row">
						<label for="dob">DoB</label>
						<input id="dob" type="date" name="dob" value="<?= e(old_post('dob')) ?>">
					</div>
					<div class="form-controls-row">
						<label for="address">Address</label>
						<input id="address" type="text" name="address" placeholder="Address">
					</div>
					<div class="row">
						<div class="col">
							<div class="form-controls-row">
								<label for="height">Heieght</label>
								<input id="height" type="nubmer" name="height" placeholder="e.g. 5.7">
							</div>
						</div>
						<div class="col">
							<div class="form-controls-row">
								<label for="weight">Weight</label>
								<input id="weight" type="nubmer" name="weight" placeholder="e.g. 56.7">
							</div>
						</div>
					</div>
					<div class="form-controls-row">
						<label for="has_passport">Passport?</label>
						<label class="inp-checkbox">
							<input id="has_passport" type="checkbox" name="has_passport">
							<span class="checkbox"></span> I have passport
						</label>
					</div>

					<div class="form-separator"></div>
					<h4 class="text-black mb-30">Applicant&apos;s training information</h4>

					<div class="form-controls-row">
						<label for="training_location">Training Location</label>
						<input id="training_location" type="text" name="training_location" placeholder="Training Location">
					</div>
					<div class="row">
						<div class="col">
							<div class="form-controls-row">
								<label for="qualification">Qualification</label>
								<select class="fullwidth" name="qualification" id="qualification">
									<option value="0" selected disabled>Select qualification</option>
									<option value="1">Metric</option>
									<option value="2">H.S.</option>
									<option value="3">Graduate</option>
									<option value="4">Post Graduate</option>
								</select>
							</div>
						</div>
						<div class="col">
							<div class="form-controls-row">
								<label for="extra_qualification">Extra Knowledge</label>
								<select class="fullwidth" name="extra_qualification" id="extra_qualification">
									<option value="0" selected disabled>Select extra knowledge</option>
									<option value="1">Basic Computer Knowledge</option>
									<option value="2">Aviation Knowledge</option>
									<option value="3">Others</option>
								</select>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="form-controls-row">
								<label for="processing_fee">Processing Fees</label>
								<select class="select fullwidth" name="processing_fee" id="processing_fee">
									<option value="0" selected disabled>Select Fee</option>
									<option value="">A</option>
								</select>
							</div>
						</div>
						<div class="col">
							<div class="form-controls-row">
								<label for="job_offer">Offer Job</label>
								<select class="fullwidth" name="job_offer" id="job_offer">
									<option value="0" selected disabled>Select Job</option>
									<option value="">s</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-controls-row mt-30">
						<input type="submit" name="create" value="Create" class="btn btn-danger btn-block">
					</div>


				</form>							
			</div>
		</div>
</template>