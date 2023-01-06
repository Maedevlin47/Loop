class EventSettingsController < ApplicationController
    
    def index
        event_setters = EventSetting.all
        render json: event_setters
    end
    
    def show
        event_setting_plusone = EventSetting.find_by_id( params[:id] ).value

    end

    def create
        create_event_settings = EventSetting.create(post_event_settings)
        render json: create_event_setting, status: :created

    end

    
    private 

    def post_event_settings
        params.permit(:plus_one, :event_id, :user_id)
    end 
end
