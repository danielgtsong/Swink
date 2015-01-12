require 'rails_helper'

RSpec.describe ApplicationController, :type => :controller do 

	it "renders (get) home index" do
		@home = assigns(:home) 
		expect(response).to have_http_status(:success) 
	end


end