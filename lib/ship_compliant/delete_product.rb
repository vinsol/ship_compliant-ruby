module ShipCompliant
  # == ShipCompliant::DeleteProduct
  #
  # This method deletes a product is it exists on ShipCompliant.
  #
  #   result = ShipCompliant::DeleteProduct.product({
  #     # product attributes
  #   }, update_mode: 'IgnoreExisting')
  #
  #   if result.success?
  #     puts "Product added successfully.
  #   else
  #     result.errors.each do |error|
  #       puts error.message
  #     end
  #   end
  class DeleteProduct
    #
    # +product+ parameter must be a Hash. The keys must be related to the the
    # keys located in ShipCompliant::ProductAttributes.
    #
    # === Options
    #
    # You can specify the update mode by passing a Hash as the second argument.
    # The default is +ErrorOnExisting+.
    #
    # Available options are.
    #
    # * UpdateExisting - Existing product information is updated.
    # * IgnoreExisting - Pre-existing information is not updated.
    # * ErrorOnExisting - An error message is returned if the product already exists.
    #
    #     ShipCompliant::DeleteProduct.product({
    #       # product attributes
    #     }, update_mode: 'UpdateExisting')
    def self.product(product, configuration: :default)
      details = {
                  'BrandKey' => product.brand.key,
                  'ProductKey' => product.key
                }

      result = delete_product(details, configuration)
      ShipCompliant::DeleteProductResult.new(result)
    end

    private

    def self.delete_product(request, configuration)
      ShipCompliant.configuration.wsdl = 'https://ws-dev.shipcompliant.com/Services/1.2/ProductService.asmx?WSDL'
      ShipCompliant.client(configuration: configuration).call(:delete_product, request)
    end

  end
end
