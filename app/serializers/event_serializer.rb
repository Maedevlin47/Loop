class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :attire, :likes
end
