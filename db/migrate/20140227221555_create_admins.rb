class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.integer :administrator_id
      t.references :space

      t.timestamps
    end
  end
end
