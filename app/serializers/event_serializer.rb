class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :attire, :likes
  has_many :event_settings
end
