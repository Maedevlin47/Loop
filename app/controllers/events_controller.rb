class EventsController < ApplicationController
    skip_before_action :authorize
    # , only: [:index, :show]

    def index
        events = Event.all
        render json: events
    end

    def create
        
        new_event = Event.create (event_params)
        if new_event.valid?
            render json: new_event
        else
            render json: {
                "errors": new_event.errors.full_messages
            }
        end
    end

    def show
        event = Event.find_by_id(params[:id])
        if event
            render json: event
        else 
            render json: {"error": "No event found"}, status: :not_found
        end
    end

    def update
        event = Event.find_by(id: params[:id])
            if event
                event.update(event_params)
                render json: event
            else
                render json: {error: 'Event not found'}, status: :not_found
            end
    end 

    def destroy
        event = Event.find_by_id(params[:id])
            if event
                event.destroy
                head :no_content
            else
                render json: {error: 'Event not found'}, status: :not_found
            end
    end

private ########################################

    def event_params
        params.permit(:title, :description, :attire)
    end

    
end
