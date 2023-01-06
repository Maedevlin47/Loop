class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        
        new_event = Event.create (new_event_params)
        if new_event.valid?
            render json: new_event
        else
            render json: {
                "errors": new_event.errors.full_messages
            }
        end
    end

    def show
        event_show = Event.show (all_events_params)
        if event_show
            render json: event_show, serializer: EventSerializer
        else render
            json: {"error": "No event found"}, status: :not_found
        end
    end

private ########################################

    def new_event_params
        params.permit(:title, :description, :attire)
    end

    def all_events_params
        params.permit(:title, :description, :attire)
    end
end
