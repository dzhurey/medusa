/**
 * @oas [delete] /store/carts/{id}/promotions
 * operationId: DeleteCartsIdPromotions
 * summary: Remove Promotions from Cart
 * description: Remove a list of promotions from a cart. This doesn't delete the
 *   Promotion, only the association between the Promotion and the cart.
 * x-authenticated: false
 * parameters:
 *   - name: id
 *     in: path
 *     description: The cart's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: expand
 *     in: query
 *     description: Comma-separated relations that should be expanded in the returned data.
 *     required: false
 *     schema:
 *       type: string
 *       title: expand
 *       description: Comma-separated relations that should be expanded in the returned data.
 *   - name: fields
 *     in: query
 *     description: >-
 *       Comma-separated fields that should be included in the returned data.
 *        * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
 *        * without prefix it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: >-
 *         Comma-separated fields that should be included in the returned data.
 *          * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
 *          * without prefix it will replace the entire default fields.
 *   - name: offset
 *     in: query
 *     description: The number of items to skip when retrieving a list.
 *     required: false
 *     schema:
 *       type: number
 *       title: offset
 *       description: The number of items to skip when retrieving a list.
 *   - name: limit
 *     in: query
 *     description: Limit the number of items returned in the list.
 *     required: false
 *     schema:
 *       type: number
 *       title: limit
 *       description: Limit the number of items returned in the list.
 *   - name: order
 *     in: query
 *     description: The field to sort the data by. By default, the sort order is
 *       ascending. To change the order to descending, prefix the field name with
 *       `-`.
 *     required: false
 *     schema:
 *       type: string
 *       title: order
 *       description: The field to sort the data by. By default, the sort order is
 *         ascending. To change the order to descending, prefix the field name with
 *         `-`.
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: curl -X DELETE '{backend_url}/store/carts/{id}/promotions'
 * tags:
 *   - Carts
 * responses:
 *   "200":
 *     description: OK
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * 
*/

